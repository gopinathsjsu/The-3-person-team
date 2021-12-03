import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Login from './Login';
import Registration from './Registration';
import ErrPage from './ErrPage';
import Profile from './Profile';
import Flighthome from './Flighthome';
import FlightList from './FlightList';
import FlightDetail from './FlightDetail';
import Success from './Success';
import Booking from './Booking';
import Confirm from './Confirm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";




ReactDOM.render(
	<BrowserRouter>
    <Switch>
      <Route path='/confirm' caseSensitive={false} component={Confirm} />
      <Route path='/booking' caseSensitive={false} component={Booking} />
      <Route path='/success' caseSensitive={false} component={Success} />
      <Route path='/flightdetail' caseSensitive={false} component={FlightDetail} />
      <Route path='/flightlist' caseSensitive={false} component={FlightList} />
      <Route path='/flighthome' caseSensitive={false} component={Flighthome} />
      <Route path='/login' caseSensitive={false} component={Login} />
      <Route path='/registration' caseSensitive={false} component={Registration} />
      <Route path='/ErrPage' caseSensitive={false} component={ErrPage} />
      <Route path='/profile' caseSensitive={false} component={Profile} />
      <Route path='/' caseSensitive={false} component={Home} />

      <Route path='/Home/' caseSensitive={false} component={Home} />
      
      
      
    </Switch>
  </BrowserRouter>,

	document.getElementById('root'));

