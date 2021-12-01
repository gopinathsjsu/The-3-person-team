**_API name: Login ._**
  * Method: POST
  * Route: /login
  * Input: JSONT({userID, password}). 
  * Return: JSONT({loginSucess})
    * Value is Boolean, True or False

**_API name: Register ._** 
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

**_API name: changeinfo ._**
  * Method: POST
  * Route: /(userID)/edit
  * Input: JSON({email, firstname, lastname, password}). 
  * Return: JSON({email, firstname, lastname, password})

**_API name: SearchFlight ._**
  * Method: POST
  * Route:/search-results
  * Input: JSON({start, destination, startDate, arrivalDate, adults}) .
  * Return: JSON(list of flight:{flightNumber, Start, Destination, startDate, startTime, arrivalDate, arrivalTime})
  
**_API name: SearchSeat ._**
  * Method: GET
  * Route:/searchseat/(flightNumber)
  * Input: flightNumber. 
  * Return: JSON(list of Seat: {Row, Letter, Passenger})

**_API name: purchacseTicket._** 
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
  * Return: JSON({email, reservationNumber, seatRow, seatLetter})
 
API name: cancelReservation . 
  * Method: POST
  * Route: /order/cancel
  * Input: JSON({email, reservationNumber}). 
  * Return: JSON({email, reservationNumber})








