#!flask/bin/python
from flask import Flask, jsonify, abort, request, make_response, url_for
from flask import render_template, redirect
from flask_cors import CORS

import MySQLdb

USERNAME = 'root'
PASSWORD = 'password'
DB_NAME = 'mytestdb'
    
app = Flask(__name__, static_url_path="")
CORS(app)

def connect_db():
    return MySQLdb.connect (host = "mysql-db-instance-2.c9wxfdtpfr4m.us-east-1.rds.amazonaws.com",
                        user = USERNAME,
                        passwd = PASSWORD,
                        db = DB_NAME, 
			port = 3306)
            
def convert_timedelta(timedelta):
    seconds = timedelta.seconds
    m, s = divmod(seconds, 60)
    h, m = divmod(m, 60)
    return '{:d}:{:02d}:{:02d}'.format(h, m, s)
    
@app.errorhandler(404)
def not_found_error(error):
    return "404 Not Found"
    
@app.errorhandler(500)
def internal_error(error):
    return "500 Internal Server Error"

@app.route('/', methods=['GET', 'POST'])
def welcome():
    return "Hello World! v2"

@app.route('/login', methods=['POST'])
def login_page():
    conn = connect_db()
    
    UserID  = request.json['UserID']
    password = request.json['password']
    
    cursor = conn.cursor()
    statement = "SELECT Password FROM User WHERE UserID = '"+UserID+"'"
    #print(statement)
    
    cursor.execute(statement)
    result = cursor.fetchone()
    
    #print("query result: ", result)
    
    cursor.close()
    conn.close()  
    
    if result:
        login_result = result[0] == password
    else:
        login_result = "No user found"

    response = jsonify(
        {"loginSucess": login_result})
        
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/getInfo/<string:userID>', methods=['GET'])
def user_page(userID):
    conn = connect_db()
    cursor = conn.cursor()
    statement = "SELECT * FROM User WHERE UserID = '"+userID+"'"
    #print(statement)
    
    cursor.execute(statement)
    result = cursor.fetchone()
    
    #print("query result: ", result)
    
    cursor.close()
    conn.close()    
    
    if result:
        response = jsonify(
            Email=result[0],
            firstName=result[2],
            lastName=result[3],
            userType=result[5]
        )
    else:
        response = jsonify(
            Email="Not found",
            firstName="Not found",
            lastName="Not found",
            userType="Not found"
        )
        
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/getRewards/<string:userID>', methods=['GET'])
def reward_page(userID):
    conn = connect_db()
    cursor = conn.cursor()

    statement = "SELECT Rewards FROM User WHERE UserID = '"+userID+"'"
    #print(statement)
    
    cursor.execute(statement)
    result = cursor.fetchone()
    
    #print("query result: ", result)
    
    cursor.close()
    conn.close()    
    
    if result:
        response = jsonify(
            rewards=result[0]
        )
    else:
        response = jsonify(
            rewards="Record not found"
        )
        
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/searchseat/<string:flightNumber>', methods=['GET'])
def search_seat(flightNumber):
    conn = connect_db()
    cursor = conn.cursor()
    
    statement = "SELECT * FROM Seat WHERE flightNumber = '"+flightNumber+"' AND Passenger IS NULL"
    #print(statement)
    
    cursor.execute(statement)
    results = cursor.fetchall()
    
    seatlist=[]
    for item in results:
        seat={}
        
        seat['Row'] = item[0]
        seat['Letter'] = item[1]
        if item[3] is None:
            seat['Passenger'] = "Empty"
        else:
           seat['Passenger'] = item[3]

        seatlist.append(seat)
    
    cursor.close()
    conn.close()    

    response = jsonify({'seats': seatlist})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/findorder/<string:reservationNumber>', methods=['GET'])
def find_order(reservationNumber):
    conn = connect_db()
    cursor = conn.cursor()
    statement = "SELECT * FROM Reservation WHERE reservationNumber = '"+reservationNumber+"'"

    cursor.execute(statement)
    result = cursor.fetchone()
    
    #print("query result: ", result)
    
    cursor.close()
    conn.close()    
    
    if result:
        response = jsonify(
            Email=result[1],
            flightNumber=result[4], 
            seatRow=result[2], 
            seatLetter=result[3],
            Payment=result[5],
        )
    else:
        response = jsonify(
            Email="Invalid order",
            flightNumber="Invalid order", 
            seatRow="Invalid order", 
            seatLetter="Invalid order",
            Payment="Invalid order",
        )
       
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/findorders/<string:userID>', methods=['GET'])
def find_orders(userID):
    conn = connect_db()
    cursor = conn.cursor()
    statement = "SELECT * FROM Reservation WHERE UserID = '"+userID+"'"

    cursor.execute(statement)
    result = cursor.fetchall()
    orderlist=[]
    for item in result:
        order={}
        order['reservationNumber']=item[0]
        order['Email']=item[1]
        order['flightNumber']=item[4]
        order['seatRow']=item[2]
        order['seatLetter']=item[3]
        order['Payment']=item[5]
        orderlist.append(order)

    cursor.close()
    conn.close()    

    response = jsonify({'orders':orderlist})

    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
    
@app.route('/search-results', methods=['POST'])
def flight_results_page():
    conn = connect_db()

    start  = request.json['start']
    destination  = request.json['destination']
    startDate  = request.json['startDate']
    adults = request.json['adults']
    #print(start, destination, startDate)
    
    cursor = conn.cursor()
    statement = "SELECT * FROM Flight WHERE Start = '"+start+"' AND Destination = '"+destination+"' AND startDate = '"+startDate+"'"
    #print(statement)
    
    cursor.execute(statement)
    results = cursor.fetchall()
    
    flightlist=[]
    for item in results:
        flight={}
        if item[8] >= int(adults): #availableSeats
            flight['flightNumber'] = item[0]
            flight['Start'] = item[1]
            flight['Destination'] = item[2]
            flight['startDate'] = str(item[3])
            flight['startTime'] = convert_timedelta(item[4])
            flight['arrivalDate'] = str(item[5])
            flight['arrivalTime'] = convert_timedelta(item[6])
            flight['Price'] = str(item[7])
            flight['availableSeats'] = str(item[8])
            flightlist.append(flight)
    
    # print("query result: ", result)
    
    cursor.close()
    conn.close()       

    response = jsonify({'flights': flightlist})
    response.headers.add('Access-Control-Allow-Origin', '*')
    
    return response
    
@app.route('/register', methods=['POST'])
def register_page():
    conn = connect_db()

    email = request.json['email']
    password = request.json['password']
    firstName = request.json['firstname']
    lastName = request.json['lastname']
    userID = email.split("@")[0]
    
    #print(start, destination, startDate)
    
    cursor = conn.cursor()
    statement = "INSERT INTO User VALUES( '"+email+"', '"+password+"', '"+firstName+"', '"+lastName+"', 0, 'Customer', '"+userID+"')"
    print(statement)
    
    cursor.execute(statement)
    conn.commit()
    
    cursor.close()
    conn.close()       

    response = jsonify({'UserID': userID})
    response.headers.add('Access-Control-Allow-Origin', '*')
    
    return response
    
@app.route('/<string:UserID>/edit', methods=['POST'])
def change_user_info_page(UserID):
    conn = connect_db()

    email = request.json['email']
    firstName = request.json['firstname']
    lastName = request.json['lastname']
    password = request.json['password']
    
    cursor = conn.cursor()
    statement = "UPDATE User SET Email = '"+email+"', Password = '"+password+"', firstName = '"+firstName+"', lastName = '"+lastName+"' WHERE UserID = '"+UserID+"'"
    #print(statement)
    
    cursor.execute(statement)
    conn.commit()
    
    cursor.close()
    conn.close()  
        
    response = {
        "email": email,
        "firstname": firstName,
        "lastname": lastName,
        "password": password
    }

    response = jsonify(response)
    response.headers.add('Access-Control-Allow-Origin', '*')
    
    return response
    
@app.route('/purchase', methods=['POST'])
def purchase_ticket_page():
    conn = connect_db()

    email = request.json['email']
    flightNumber = request.json['flightNum']
    seatRow = request.json['seatRow']
    seatLetter = request.json['seatLetter']
    payment = request.json['payment']
    
    #print(start, destination, startDate)
    cursor = conn.cursor()
    
    cursor.execute("SELECT UserID from User WHERE Email = '"+email+"'")
    UserID = cursor.fetchone()[0]
    
    cursor.execute("SELECT MAX(reservationNumber) from Reservation")
    reservationNumber = cursor.fetchone()[0] + 1
    
    statement = "INSERT INTO Reservation VALUES( "+str(reservationNumber)+", '"+email+"', "+seatRow+", '"+seatLetter+"', '"+flightNumber+"', '"+payment+"', '"+UserID+"')"
    
    cursor.execute(statement)
    
    seat_statement = "UPDATE Seat SET Passenger = '"+UserID+"' WHERE seatRow = "+seatRow+" AND seatLetter = '"+seatLetter+"' AND flightNumber = '"+flightNumber+"'"
    #print(seat_statement)
    
    cursor.execute(seat_statement)
    
    flight_statement = "UPDATE Flight SET availableSeats = availableSeats-1 WHERE flightNumber = '"+flightNumber+"'"
    
    cursor.execute(flight_statement)
    
    conn.commit()
    
    cursor.close()
    conn.close()       

    response = jsonify({'reservationNumber': str(reservationNumber)})
    response.headers.add('Access-Control-Allow-Origin', '*')
    
    return response
    
@app.route('/order/update', methods=['POST'])
def edit_reservation_page():
    conn = connect_db()

    email = request.json['email']
    reservationNumber = request.json['reservationNumber']
    seatRow = request.json['seatRow']
    seatLetter = request.json['seatLetter']
    
    #print(start, destination, startDate)
    cursor = conn.cursor()
    
    cursor.execute("SELECT UserID from User WHERE Email = '"+email+"'")
    UserID = cursor.fetchone()[0]
    
    cursor.execute("SELECT flightNumber, seatRow, seatLetter from Reservation WHERE reservationNumber = '"+reservationNumber+"'")
    result = cursor.fetchone()
    flightNumber = result[0]
    old_seat_row = result[1]
    old_seat_letter = result[2]
    
    statement = "UPDATE Reservation SET Email = '"+email+"', seatRow = "+seatRow+", seatLetter = '"+seatLetter+"' WHERE reservationNumber = "+reservationNumber
    cursor.execute(statement)
    
    seat_statement = "UPDATE Seat SET Passenger = '"+UserID+"' WHERE seatRow = "+seatRow+" AND seatLetter = '"+seatLetter+"' AND flightNumber = '"+flightNumber+"'"
    #print(seat_statement)
    cursor.execute(seat_statement)
    
    old_seat_statement = "UPDATE Seat SET Passenger = NULL WHERE seatRow = "+str(old_seat_row)+" AND seatLetter = '"+old_seat_letter+"' AND flightNumber = '"+flightNumber+"'"
    #print(seat_statement)
    cursor.execute(old_seat_statement)
    
    conn.commit()
    
    cursor.close()
    conn.close()  

    response = {
        "email":email,
        "reservationNumber":reservationNumber,
        "seatRow":seatRow,
        "seatLetter":seatLetter
    }

    response = jsonify(response)
    response.headers.add('Access-Control-Allow-Origin', '*')
    
    return response
    
@app.route('/order/cancel', methods=['POST'])
def cancel_reservation_page():
    conn = connect_db()

    email = request.json['email']
    reservationNumber = request.json['reservationNumber']
    
    #print(start, destination, startDate)
    cursor = conn.cursor()
    
    cursor.execute("SELECT UserID from User WHERE Email = '"+email+"'")
    UserID = cursor.fetchone()[0]
    
    cursor.execute("SELECT flightNumber, seatRow, seatLetter from Reservation WHERE reservationNumber = '"+reservationNumber+"'")
    result = cursor.fetchone()
    flightNumber = result[0]
    old_seat_row = result[1]
    old_seat_letter = result[2]
    
    reservation_statement = "DELETE FROM Reservation WHERE reservationNumber = "+reservationNumber
    cursor.execute(reservation_statement)
    
    old_seat_statement = "UPDATE Seat SET Passenger = NULL WHERE seatRow = "+str(old_seat_row)+" AND seatLetter = '"+old_seat_letter+"' AND flightNumber = '"+flightNumber+"'"
    #print(seat_statement)
    cursor.execute(old_seat_statement)
    
    flight_statement = "UPDATE Flight SET availableSeats = availableSeats+1 WHERE flightNumber = '"+flightNumber+"'"
    cursor.execute(flight_statement)
    
    conn.commit()
    
    cursor.close()
    conn.close()       
    
    response = {
        "email":email,
        "reservationNumber":reservationNumber
    }
    response = jsonify(response)
    response.headers.add('Access-Control-Allow-Origin', '*')
    
    return response

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5000)
    
