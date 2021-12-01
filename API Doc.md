API name: Login . 
  * Method: GET
  * Route: /login/(userID)
  * Input: userID. 
  * Return: Password

API name: Register . 
  * Method: POST
  * Route: /register/
  * Input: Fristname,Lastname, Zipcode, PhoneNumber, email. 
  * Return: UserID

API name: getInfo .
  * Method: GET
  * Route: /(userID)
  * Input: UserID
  * Return: JSON({Email, firstName, lastName, userType})

API name: getRewards.
  * Method: GET
  * Route: /(userID)
  * Input: UserID
  * Return: JSON({Rewards})

API name: changeinfo . 
  * Method: GET, POST
  * Input: UserID. Return: userInfomation

API name: SearchFlight . 
  * Method: GET
  * Route:/search-results?departure=(departure)&destination=(destination)&date=(date, YYYY-MM-DD)
    * use query params
  * Input: Departure,destination, Date. 
  * Return: JSON(list of flight:{flightNumber, Start, Destination, startDate, startTime, arrivalDate, arrivalTime})
  
API name: SearchSeat . 
  * Method: GET
  * Route:/seats/(flightNumber)
  * Input: flightNumber. 
  * Return: JSON(list of Seat: {Row, Letter, Passenger})

API name: purchacseTicket. 
  * Method: GET, POST
  * Input: flightNumber,seatNumber. Return: orderID

API name: findOrder . 
  * Method: GET
  * Route: /order/(reservationNumber)
  * Input: reservationNumber. 
  * Return: JSON({Email, flightNumber, seatRow, seatLetter, Payment})
  
API name: findOrders . 
  * Method: GET
  * Route: /order/(userID)
  * Input: userID. 
  * Return: JSON(list of orders: {reservationNumber, Email, flightNumber, seatRow, seatLetter, Payment})







