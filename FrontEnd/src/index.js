import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Default from './Default';
import Gettest from './Gettest';
import Login from './Login';
import Registration from './Registration';
import ErrPage from './ErrPage';
import testHome from './testHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";




ReactDOM.render(
	<BrowserRouter>
    <Switch>
      <Route path='/login' caseSensitive={false} component={Login} />
      <Route path='/registration' caseSensitive={false} component={Registration} />
      <Route path='/ErrPage' caseSensitive={false} component={ErrPage} />
      <Route path='/' caseSensitive={false} component={Home} />

      <Route path='/Home/' caseSensitive={false} component={Home} />
      
      
      
    </Switch>
  </BrowserRouter>,

	document.getElementById('root'));

