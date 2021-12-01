#!flask/bin/python
from flask import Flask, jsonify, abort, request, make_response, url_for
from flask import render_template, redirect

import MySQLdb

USERNAME = 'root'
PASSWORD = 'password'
DB_NAME = 'mytestdb'
    
app = Flask(__name__, static_url_path="")

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

@app.route('/', methods=['GET', 'POST'])
def welcome():
    return "Hello World!"

@app.route('/login/<string:UserID>', methods=['GET'])
def login_page(UserID):
    conn = connect_db()
    
    cursor = conn.cursor()
    statement = "SELECT Password FROM User WHERE UserID = '"+UserID+"'"
    #print(statement)
    
    cursor.execute(statement)
    result = cursor.fetchone()
    
    print("query result: ", result)
    
    cursor.close()
    conn.close()    

    response = jsonify(
        password=result[0]
    )
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/getInfo/<int:userID>', methods=['GET'])
def user_page(userID):
    conn = MySQLdb.connect (host = "mysql-db-instance-2.c9wxfdtpfr4m.us-east-1.rds.amazonaws.com",
                        user = USERNAME,
                        passwd = PASSWORD,
                        db = DB_NAME, 
			port = 3306)
    cursor = conn.cursor()
    
    #TODO
    statement = "SELECT Password FROM User WHERE userID = userID"
    #print(statement)
    
    cursor.execute(statement)
    result = cursor.fetchone()
    
    print("query result: ", result)
    
    cursor.close()
    conn.close()    

    response = jsonify(
        password=result[0]
    )
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/getRewards/<int:userID>', methods=['GET'])
def reward_page(userID):
    conn = MySQLdb.connect (host = "mysql-db-instance-2.c9wxfdtpfr4m.us-east-1.rds.amazonaws.com",
                        user = USERNAME,
                        passwd = PASSWORD,
                        db = DB_NAME, 
			port = 3306)
    cursor = conn.cursor()
    
    #TODO
    statement = "SELECT Rewards FROM User WHERE userID = userID"
    #print(statement)
    
    cursor.execute(statement)
    result = cursor.fetchone()
    
    print("query result: ", result)
    
    cursor.close()
    conn.close()    

    response = jsonify(
        password=result[0]
    )
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/searchseat/<string:flightNumber>', methods=['GET'])
def search_seat(flightNumber):
    conn = MySQLdb.connect (host = "mysql-db-instance-2.c9wxfdtpfr4m.us-east-1.rds.amazonaws.com",
                        user = USERNAME,
                        passwd = PASSWORD,
                        db = DB_NAME, 
			port = 3306)
    cursor = conn.cursor()
    
    #TODO
    statement = "SELECT seats FROM flight WHERE flightNumber = flightNumber"
    #print(statement)
    
    cursor.execute(statement)
    result = cursor.fetchone()
    
    print("query result: ", result)
    
    cursor.close()
    conn.close()    

    response = jsonify(
        password=result[0]
    )
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/findorder/<string:reservationNumber>', methods=['GET'])
def find_order(reservationNumber):
    conn = MySQLdb.connect (host = "mysql-db-instance-2.c9wxfdtpfr4m.us-east-1.rds.amazonaws.com",
                        user = USERNAME,
                        passwd = PASSWORD,
                        db = DB_NAME, 
			port = 3306)
    cursor = conn.cursor()
    
    #TODO
    statement = "SELECT order FROM order WHERE reservationNumber = reservationNumber"
    #print(statement)
    
    cursor.execute(statement)
    result = cursor.fetchone()
    
    print("query result: ", result)
    
    cursor.close()
    conn.close()    

    response = jsonify(
        password=result[0]
    )
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/findorders/<int:userID>', methods=['GET'])
def find_orders(userID):
    conn = MySQLdb.connect (host = "mysql-db-instance-2.c9wxfdtpfr4m.us-east-1.rds.amazonaws.com",
                        user = USERNAME,
                        passwd = PASSWORD,
                        db = DB_NAME, 
			port = 3306)
    cursor = conn.cursor()
    
    #TODO
    statement = "SELECT orders FROM order WHERE userID = userID"
    #print(statement)
    
    cursor.execute(statement)
    result = cursor.fetchone()
    
    print("query result: ", result)
    
    cursor.close()
    conn.close()    

    response = jsonify(
        password=result[0]
    )
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
    
@app.route('/search-results', methods=['GET'])
def flight_results_page():
    conn = connect_db()

    start  = request.args.get('departure', None)
    destination  = request.args.get('destination', None)
    startDate  = request.args.get('date', None)
    #print(start, destination, startDate)
    
    cursor = conn.cursor()
    statement = "SELECT * FROM Flight WHERE Start = '"+start+"' AND Destination = '"+destination+"' AND startDate = '"+startDate+"'"
    #print(statement)
    
    cursor.execute(statement)
    results = cursor.fetchall()
    
    flightlist=[]
    for item in results:
        flight={}
        flight['flightNumber'] = item[0]
        flight['Start'] = item[1]
        flight['Destination'] = item[2]
        flight['startDate'] = item[3]
        flight['startTime'] = convert_timedelta(item[4])
        flight['arrivalDate'] = item[5]
        flight['arrivalTime'] = convert_timedelta(item[6])
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

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5000)
    
