import React, { Component, Fragment, form } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import login from './images/login.jpg';
import Registration from './Registration';
import axios from 'axios';
import sjsu from './images/SJSU.png';
import flighticon from './images/flight-2.jpg'


export default class FlightList extends Component {
  
	constructor(props) {
		super(props);
		console.log("!!!!!!!FlightList!!!!!");
		console.log(this.props.location.state);
		this.replaceLogin = this.replaceLogin.bind(this)
		this.submitHandler = this.submitHandler.bind(this)
	}

	submitHandler (flightInfo) {
	    //e.preventDefault();
	    console.log('===FlightList===');
	    console.log(this.state);
	     console.log('===flightInfo===');
	    console.log(flightInfo);
	    const tmpEmail = {
	      	"email":this.props.location.state
	      }


		let result = Object.assign(tmpEmail, flightInfo);
		this.props.history.push({pathname:'/flightdetail', state:result});
	  }


	replaceLogin() {
      console.log("=====replaceLogin====");
      console.log(this.props.location.state);
      if(this.props.location.state && this.props.location.state !== '') {
        return(
          <ul className="list-unstyled list-inline">
              <li><Link to={{pathname:'/profile/', state:this.props.location.state}} ><span><i className="fa fa-lock" /></span>My Profile</Link></li>
              <li><Link to="/Home " ><span><i className="fa fa-lock" /></span>Sign Out</Link></li>
            </ul> 
                 
          );
        } else {
          return(
          <ul className="list-unstyled list-inline">
            <li><Link to="/login" ><span><i className="fa fa-lock" /></span>Login</Link></li>
            <li><Link to="/registration" ><span><i className="fa fa-plus" /></span>Sign Up</Link></li>
          </ul> 
          );
        }
    }


	render() {
    console.log('==FlightList==render  ==');
    console.log(this.props.location.state);
    var listFlights = ''
    if(this.props.location.state && this.props.location.state.flights) {
    const res = this.props.location.state.flights;
    listFlights = res.map((d) => [<div className="list-block main-block f-list-block">
                    <div className="list-content">
                      <div className="main-img list-img f-list-img">
                        <a href="flight-detail-left-sidebar.html">
                          <div className="f-img">
                            <img src={flighticon} className="img-responsive" alt="flight-img" />
                          </div>
                        </a>
                        <ul className="list-unstyled list-inline offer-price-1">
                          <li className="duration"></li>
                          <li className="price">${d.Price}</li>
                        </ul>
                        <ul className="list-unstyled flight-timing">
                          <li><span><i className="fa fa-plane" /></span><span className="date">{d.startDate} </span>({d.startTime})</li>
                          <li><span><i className="fa fa-plane" /></span><span className="date">{d.arrivalDate}</span>({d.arrivalTime})</li>
                        </ul>
                      </div>{/* end f-list-img */}
                      <div className="list-info f-list-info">
                        <h3 className="block-title"><a href="">{d.Start} to {d.Destination}</a></h3>
                        <p className="block-minor"><span>{d.flightNumber},</span> Oneway Flight</p>
                        <p>More flight info can be found here.</p>
                        <a href="#" className="btn btn-orange" onClick={() => this.submitHandler(d)}>View More</a>
                      </div>
                    </div>
                  </div>]);
              }
		return(
<div>
        <title>Flight Listing</title>
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
        {/*Jquery UI Stylesheet*/}
        <link rel="stylesheet" href="css/jquery-ui.min.css" />

        
        {/*============= TOP-BAR ===========*/}
        <div id="top-bar" className="tb-text-white">
          <div className="container">
            <div className="row">          
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div id="info">
                  <ul className="list-unstyled list-inline">
                    <li></li>
                    <li></li>
                  </ul>
                </div>{/* end info */}
              </div>{/* end columns */}
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div id="links">
                  <ul className="list-unstyled list-inline">
                    {this.replaceLogin()}
                  </ul>
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
                
              </div>
              <a href="#" className="navbar-brand"><span><i className="fa fa-plane" />SJ</span>SU</a>
            </div>{/* end navbar-header */}
            <div className="collapse navbar-collapse" id="myNavbar1">
              <ul className="nav navbar-nav navbar-right navbar-search-link">
                <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Home<span></span></a>
                  	
                </li>
                <li className="dropdown active"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Flights<span></span></a>
                  	
                </li>
                
                <li></li>
              </ul>
            </div>{/* end navbar collapse */}
          </div>{/* end container */}
        </nav>{/* end navbar */}
        
        {/*========================= PAGE-COVER ======================*/}
        <section className="page-cover back-size" id="cover-flight-grid-list">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="page-title">Flight Listing</h1>
                <ul className="breadcrumb">
                  <li><a href="#">Home</a></li>
                  <li className="active">Flight Listing</li>
                </ul>
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>{/* end page-cover */}
        {/*===== INNERPAGE-WRAPPER ====*/}
        <section className="innerpage-wrapper">
          <div id="flight-listings" className="innerpage-section-padding">
            <div className="container">
              <div className="row">        	
                <div className="col-xs-12 col-sm-12 col-md-3 side-bar left-side-bar">
                  
                  <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-12">
                      <div className="side-bar-block main-block ad-block">
                        <div className="main-img ad-img">
                          <a href="#">
                            <img src={sjsu} className="img-responsive" alt="car-ad" />
                            <div className="ad-mask">
                              
                            </div>{/* end columns */}
                          </a>
                        </div>{/* end ad-img */}
                      </div>{/* end side-bar-block */}
                    </div>{/* end columns */}
                    <div className="col-xs-12 col-sm-6 col-md-12">    
                      <div className="side-bar-block support-block">
                        <h3>Customer Service</h3>
                        <p>Call the following number if you have any question:</p>
                        <div className="support-contact">
                          <span><i className="fa fa-phone" /></span>
                          <p>+1 123 1234567</p>
                        </div>{/* end support-contact */}
                      </div>{/* end side-bar-block */}
                    </div>{/* end columns */}
                  </div>{/* end row */}
                </div>{/* end columns */}
                <div className="col-xs-12 col-sm-12 col-md-9 content-side">
                  
					{listFlights}
                  
                 
                  
                </div>{/* end columns */}
              </div>{/* end row */}
            </div>{/* end container */}
          </div>{/* end flight-listings */}
        </section>{/* end innerpage-wrapper */}
        {/*======================= BEST FEATURES =====================*/}
        <section id="best-features" className="banner-padding black-features">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="b-feature-block">
                  <span><i className="fa fa-dollar" /></span>
                  <h3>Best Price Guarantee</h3>
                  <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis.</p>
                </div>{/* end b-feature-block */}
              </div>{/* end columns */}
              <div className="col-sm-6 col-md-3">
                <div className="b-feature-block">
                  <span><i className="fa fa-lock" /></span>
                  <h3>Safe and Secure</h3>
                  <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis.</p>
                </div>{/* end b-feature-block */}
              </div>{/* end columns */}
              <div className="col-sm-6 col-md-3">
                <div className="b-feature-block">
                  <span><i className="fa fa-thumbs-up" /></span>
                  <h3>Best Travel Agents</h3>
                  <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis.</p>
                </div>{/* end b-feature-block */}
              </div>{/* end columns */}
              <div className="col-sm-6 col-md-3">
                <div className="b-feature-block">
                  <span><i className="fa fa-bars" /></span>
                  <h3>Travel Guidelines</h3>
                  <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis.</p>
                </div>{/* end b-feature-block */}
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>{/* end best-features */}
        
        {/* Page Scripts Starts */}
        {/* Page Scripts Ends */}
      </div>
			)}
}
