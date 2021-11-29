#!flask/bin/python
from flask import Flask, jsonify, abort, request, make_response, url_for
from flask import render_template, redirect

import MySQLdb

USERNAME = 'root'
PASSWORD = 'password'
DB_NAME = 'mytestdb'
    
app = Flask(__name__, static_url_path="")

@app.route('/', methods=['GET', 'POST'])
def welcome():
    return "Hello World!"

@app.route('/login/<string:email>', methods=['GET'])
def login_page(email):
    conn = MySQLdb.connect (host = "mysql-db-instance-2.c9wxfdtpfr4m.us-east-1.rds.amazonaws.com",
                        user = USERNAME,
                        passwd = PASSWORD,
                        db = DB_NAME, 
			port = 3306)
    cursor = conn.cursor()
    statement = "SELECT Password FROM User WHERE Email = '"+email+"'"
    #print(statement)
    
    cursor.execute(statement)
    result = cursor.fetchone()
    
    print("query result: ", result)
    
    cursor.close()
    conn.close()        
    return jsonify(
        password=result[0]
    )

"""
@app.route('/student/add', methods=['GET', 'POST'])
def student_add_page():
    if request.method == 'POST':    
        conn = sqlite3.connect('college.sqlite')

        statement = "INSERT INTO student (STUDENT_ID,NAME,DOB,PHOTO) VALUES ("+\
                    request.form['studentID']+", '"+\
                    request.form['studentName']+"', '"+\
                    request.form['studentDOB']+"');";
        
        result = conn.execute(statement);
        conn.commit()
        conn.close()

        return redirect('/')
    else:
        return render_template('add.html')


@app.route('/student/delete/<int:student_id>', methods=['GET'])
def delete_student_process(student_id):
    
    conn = sqlite3.connect('college.sqlite')
    results = conn.execute("DELETE FROM student WHERE STUDENT_ID="+str(student_id)+";");
    conn.commit()
    
    return redirect('/')
"""

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5000)
    
