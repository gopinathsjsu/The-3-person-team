API name: Login . 
  * Method: GET
  * Route: /login/(userID)
  * Input: userID. 
  * Return: Password

API name: Register . 
  * Method: POST
  * Route: /register
  * Input: JSON({email, password, firstname, lastname}). 
  * Return: JSON({UserID})
    * UserID: first part of email, before @ 

API name: getInfo .
  * Method: GET
  * Route: /(userID)
  * Input: UserID
  * Return: JSON({Email, firstName, lastName, userType})

API name: getRewards.
  * Method: GET
  * Route: /(userID)/rewards
  * Input: UserID
  * Return: JSON({Rewards})

API name: changeinfo . 
  * Method: POST
  * Route: /(userID)/edit
  * Input: JSON({email, firstname, lastname, password}). 
  * Return: JSON({email, firstname, lastname, password})

API name: SearchFlight . 
  * Method: POST
  * Route:/search-results
  * Input: JSON({start, destination, startDate, arrivalDate, adults}) .
  * Return: JSON(list of flight:{flightNumber, Start, Destination, startDate, startTime, arrivalDate, arrivalTime})
  
API name: SearchSeat . 
  * Method: GET
  * Route:/seats/(flightNumber)
  * Input: flightNumber. 
  * Return: JSON(list of Seat: {Row, Letter, Passenger})

API name: purchacseTicket. 
  * Method: POST
  * Route: /purchase
  * Input: JSON({flightNum, email, seatRow, seatLetter, payment})
  * Return: JSON({reservationNumber})

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

API name: editReservation . 
  * Method: POST
  * Route: /order/update
  * Input: JSON({email, reservationNumber, seatRow, seatLetter}). 
  * Return: JSON(list of orders: {reservationNumber, Email, flightNumber, seatRow, seatLetter, Payment})








