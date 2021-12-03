import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import registration from './images/registration.jpg';

export default class ErrPage extends Component {

	constructor(props) {
		super(props);
		}

	render() {
		return (
		<div>
        <title>Error Page</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="images/favicon.png" type="image/x-icon" />
        {/* Google Fonts */}	
        <link href="https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i,900,900i%7CMerriweather:300,300i,400,400i,700,700i,900,900i" rel="stylesheet" />
        {/* Bootstrap Stylesheet */}	
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        {/* Font Awesome Stylesheet */}
        <link rel="stylesheet" href="css/font-awesome.min.css" />
        {/* Custom Stylesheets */}	
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" id="cpswitch" href="css/orange.css" />
        <link rel="stylesheet" href="css/responsive.css" />
        
        {/*======== SEARCH-OVERLAY =========*/}       
        <div className="overlay">
          <a href="" id="close-button" className="closebtn">×</a>
          <div className="overlay-content">
            <div className="form-center">
              <form>
                <div className="form-group">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search..." required />
                    <span className="input-group-btn"><button type="submit" className="btn"><span><i className="fa fa-search" /></span></button></span>
                  </div>{/* end input-group */}
                </div>{/* end form-group */}
              </form>
            </div>{/* end form-center */}
          </div>{/* end overlay-content */}
        </div>{/* end overlay */}
        {/*============= TOP-BAR ===========*/}
        <div id="top-bar" className="tb-text-white">
          <div className="container">
            <div className="row">          
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div id="info">
                  <ul className="list-unstyled list-inline">
                    <li><span></span></li>
                    <li><span></span></li>
                  </ul>
                </div>{/* end info */}
              </div>{/* end columns */}
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div id="links">
                  <ul className="list-unstyled list-inline">
                    <li><Link to="/login" ><span><i className="fa fa-lock" /></span>Login</Link></li>
                    <li><Link to="/registration" ><span><i className="fa fa-plus" /></span>Sign Up</Link></li>
                    <li>
                      
                    </li>
                  </ul>
                </div>{/* end links */}
              </div>{/* end columns */}				
            </div>{/* end row */}
          </div>{/* end container */}
        </div>{/* end top-bar */}
        {/*===== INNERPAGE-WRAPPER ====*/}
        <section className="innerpage-wrapper">
          <div id="error-text" className="section-padding back-size">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="company-name"><span><i className="fa fa-plane" /></span>SJSU</h3>
                  <h2>404</h2>
                  <p>The page you were looking for could not be found.</p>
                  <a href="index.html" className="btn btn-w-border"><Link to="/Home">Go Back Home</Link></a>
                </div>{/* end columns */}
              </div>{/* end row */}
            </div>{/* end container */}
          </div>{/* end error-text */}
        </section>{/* end innerpage-wrapper */}
        
        {/* Page Scripts Starts */}
        {/* Page Scripts Ends */}
      </div>
			)
	}
}