import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import { Link } from "react-router-dom";
import './style.css';
import './css/bootstrap.min.css';
import './css/style.css';
import './css/responsive.css';
import './css/orange.css';
import client1 from './images/client-1.jpg';
import client2 from './images/client-2.jpg';
import client3 from './images/client-3.jpg';
import landingslider1 from './images/landing-slider-1.jpg';
import Registration from './Registration';

class Home extends Component {

	constructor(props) {
		super(props);
    console.log(this.props.location.state);
		}

  signOut(){
    this.props.location.state = '';
  }

  replaceLogin() {
    if(this.props.location.state && this.props.location.state !== '') {
      return(
        <ul className="list-unstyled list-inline">
          <li><Link to="/login" ><span><i className="fa fa-lock" /></span>Login</Link></li>
          <li><Link to="/registration" ><span><i className="fa fa-plus" /></span>Sign Up</Link></li>
        </ul>        
        );
      } else {
        return(
          <ul className="list-unstyled list-inline">
            <li><Link to="/profile" ><span><i className="fa fa-lock" /></span>My Profile</Link></li>
            <li><Link to="/Home" ><span><i className="fa fa-lock" /></span>Sign Out</Link></li>
          </ul>  
        );
      }
  }

render() {
	return(
<div>
        
        {/*============= TOP-BAR ===========*/}
        <div id="top-bar" className="tb-text-white">
          <div className="container">
            <div className="row">          
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div id="info">
                  <ul className="list-unstyled list-inline">
                    <li><span><i className="fa fa-map-marker" /></span></li>
                    <li><span><i className="fa fa-phone" /></span></li>
                  </ul>
                </div>{/* end info */}
              </div>{/* end columns */}
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div id="links">
                  {this.replaceLogin()}
                </div>{/* end links */}
              </div>{/* end columns */}       
            </div>{/* end row */}
          </div>{/* end container */}
        </div>{/* end top-bar */}
        <nav className="navbar navbar-default main-navbar navbar-custom navbar-white" id="mynavbar-1">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" id="menu-button">
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />                        
              </button>
              <div className="header-search hidden-lg">
                <a href="" className="search-button"><span><i className="fa fa-search" /></span></a>
              </div>
              <a href="#" className="navbar-brand"><span><i className="fa fa-plane" />SJ</span>SU</a>
            </div>{/* end navbar-header */}
            <div className="collapse navbar-collapse" id="myNavbar1">
              <ul className="nav navbar-nav navbar-right navbar-search-link">
                <li className="dropdown active"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Home<span><i className="fa fa-angle-down" /></span></a>  
                </li>
                <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Flights<span><i className="fa fa-angle-down" /></span></a>
                </li>
                
                <li><a href="" className="search-button"><span><i className="fa fa-search" /></span></a></li>
              </ul>
            </div>{/* end navbar collapse */}
          </div>{/* end container */}
        </nav>{/* end navbar */}        
        
        
      </div>
				)
}

}

export default Home;




