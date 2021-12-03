import React, { Component, Fragment, form, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import login from './images/login.jpg';
import flightimg from './images/flight-6.jpg';
import flightimg5 from './images/flight-5.jpg';
import flightimg4 from './images/flight-4.jpg';
import flightimg3 from './images/flight-3.jpg';
import flightimg2 from './images/flight-2.jpg';
import flightimg1 from './images/flight-1.jpg';
import Registration from './Registration';
import axios from 'axios';
import backgroundimage1 from './images/flight-slider-1.jpg';
import './images/favicon.png';
//import 'https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i,900,900i%7CMerriweather:300,300i,400,400i,700,700i,900,900i';

import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/style.css';
import './css/responsive.css';
import './css/orange.css';
import './css/flexslider.css';
import './css/datepicker.css';
import './css/magnific-popup.css';
import DatePicker from "react-datepicker";
import Moment from 'moment';

import "react-datepicker/dist/react-datepicker.css";

export default class Flighthome extends Component {

	constructor(props) {
		super(props);
		this.state = {
	      startDate: new Date(),
	      arrivalDate: new Date(),
	      start: '',
	      destination: '',
	      adults: ''
	    }
	    console.log("~~~aaaaaa~~~~~~~~~");
	    console.log(this.state.startDate);
	    console.log(this.state.arrivalDate);
		this.handleStartChange = this.handleStartChange.bind(this);
		this.handleEndChange = this.handleEndChange.bind(this);
		this.handleDeptChange = this.handleDeptChange.bind(this);
		this.handleArrChange = this.handleArrChange.bind(this);
		this.handleAdultsChange = this.handleAdultsChange.bind(this);
    	this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	 handleStartChange(date) {
	    this.setState({
	      //startDate : Moment(date).format('YYYY-MM-DD')
	      startDate : date
	    })
	  }

	  handleEndChange(date) {
	    this.setState({
	      //arrivalDate: new Date(date).toLocaleDateString()
	      arrivalDate: date
	    })
	  }

	  handleDeptChange(e) {
	    this.setState({[e.target.name] : e.target.value})
	  }

	  handleArrChange(e) {
	    this.setState({[e.target.name] : e.target.value})
	  }

	  handleAdultsChange(e) {
	    this.setState({[e.target.name] : e.target.value})
	  }

	  onFormSubmit(e) {
	    e.preventDefault();
	    console.log("~~~~~~~~~~find flight~~~~~~~~~");
	    console.log(this.state);
	    this.state.arrivalDate = this.state.arrivalDate.toISOString().split('T')[0]
	    this.state.startDate = this.state.startDate.toISOString().split('T')[0]
	    console.log("~~~~~~~~~~date~~~~~~~~~");
	    console.log(this.state);
	    const headers = 'Content-Type: application/json'
		
		axios.post('http://airlineapi.us-east-1.elasticbeanstalk.com/search-results', this.state, {
            headers: {'Content-Type': 'application/json'}
          })
		    .then(response => {
		      console.log(response);
		      console.log("~~~~result~~~~");
		      const tmpEmail = {
		      	"email":this.props.location.state
		      }
		      let result = Object.assign(tmpEmail, response.data);
		      console.log(result);
		      if(response.status == 200) {
		        this.props.history.push({pathname:'/flightlist', state:result});
		      } else {
		        this.props.history.push('/ErrPage');
		      }
		    }).catch(function (error) {
			      console.log('Error', error.message);
			  });

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

		return(
			<div>
        <title>Flight Homepage</title>
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
        {/* Flex Slider Stylesheet */}
        <link rel="stylesheet" href="css/flexslider.css" type="text/css" />
        {/*Date-Picker Stylesheet*/}
        <link rel="stylesheet" href="css/datepicker.css" />
        {/* Magnific Gallery */}
        <link rel="stylesheet" href="css/magnific-popup.css" />
        
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
                    {this.replaceLogin()}
                  </ul>
                </div>{/* end links */}
              </div>{/* end columns */}				
            </div>{/* end row */}
          </div>{/* end container */}
        </div>{/* end top-bar */}
        <nav className="navbar navbar-default main-navbar navbar-custom navbar-white" id="mynavbar">
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
              <Link to='/Home'><a href="#" className="navbar-brand"><span><i className="fa fa-plane" />SJ</span>SU</a></Link>
            </div>{/* end navbar-header */}
            <div className="collapse navbar-collapse" id="myNavbar1">
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown"><Link to={{pathname:'/home', state:this.props.location.state}} className="dropdown-toggle">Home</Link><span></span>
                		
                </li>
                <li className="dropdown active"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Flights<span></span></a>
                  	
                </li>
                
                <li></li>
              </ul>
            </div>{/* end navbar collapse */}
          </div>{/* end container */}
        </nav>{/* end navbar */}
        <div className="sidenav-content">
          <div id="mySidenav" className="sidenav">
            <h2 id="web-name"><span><i className="fa fa-plane" /></span>Star Travel</h2>
            <div id="main-menu">
              <div className="closebtn">
                <button className="btn btn-default" id="closebtn">×</button>
              </div>{/* end close-btn */}
              <div className="list-group panel">
                <a href="#home-links" className="list-group-item active" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-home link-icon" /></span>Home<span><i className="fa fa-chevron-down arrow" /></span></a>
               
                <a href="#flights-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-plane link-icon" /></span>Flights<span><i className="fa fa-chevron-down arrow" /></span></a>
                
                
              </div>{/* end list-group */}
            </div>{/* end main-menu */}
          </div>{/* end mySidenav */}
        </div>{/* end sidenav-content */}
       
              
        {/*========================= FLEX SLIDER =====================*/}
        <section className="flexslider-container" id="flexslider-container-2">
          <div className="flexslider slider" id="slider-2">
            <div className="slides">
              <div className="item-1 back-size" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(${backgroundimage1})`, backgroundSize: 'cover', height: '100%'}}>
                <div className="meta">         
                  <div className="container">
                    <h2 style={{marginTop: '200px', textAlign: 'center', color:'white', fontSize:'40px'}}>Best Flight Offers</h2>
                    
                  </div>{/* end container */}  
                </div>{/* end meta */}
              </div>{/* end item-1 */}
            </div>
            
          </div>{/* end slider */}
          <div className="search-tabs" id="search-tabs-2">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="nav nav-tabs">
                    <li className="active"><a href="#flights" data-toggle="tab"><span><i className="fa fa-plane" /></span><span className="st-text">Flights</span></a></li>

                  </ul>
                  <div className="tab-content">
                    <div id="flights" className="tab-pane in active">
                      <form onSubmit={ this.onFormSubmit }>
                        <div className="row">
                          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                            <div className="row">
                              <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="form-group left-icon">
                                  <input type="text" className="form-control" placeholder="From" name="start" onChange={ this.handleDeptChange } />
                                  <i className="fa fa-map-marker" />
                                </div>
                              </div>{/* end columns */}
                              <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="form-group left-icon">
                                  <input type="text" className="form-control" placeholder="To" name="destination" onChange={ this.handleArrChange }/>
                                  <i className="fa fa-map-marker" />
                                </div>
                              </div>{/* end columns */}
                            </div>{/* end row */}								
                          </div>{/* end columns */}
                          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                            <div className="row">
                              <div className="col-xs-6 col-sm-6 col-md-6">
                                <div className="form-group left-icon">
                                  
                                  <DatePicker className="form-control dpd1" placeholder="Check In"
						              selected={ this.state.startDate }
						              onChange={ this.handleStartChange }
						              name="startDate"
						              dateFormat={'yyyy-MM-dd'}
						          />
						           <i className="fa fa-calendar"></i>
                                </div>
                              </div>{/* end columns */}
                              <div className="col-xs-6 col-sm-6 col-md-6">
                                <div className="form-group left-icon">
                                  <DatePicker className="form-control dpd1" placeholder="Check Out"
						              dateFormat={'yyyy-MM-dd'}
						              selected={ this.state.arrivalDate }
						              onChange={ this.handleEndChange }
						              name="arrivalDate"
						          />
						           <i className="fa fa-calendar"></i>
                                </div>
                              </div>{/* end columns */}
                            </div>{/* end row */}								
                          </div>{/* end columns */}
                          <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                            <div className="form-group right-icon">
                              <select className="form-control" name="adults" onChange={ this.handleAdultsChange }>
                                <option defaultValue>Adults</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                              </select>
                              <i className="fa fa-angle-down" />
                            </div>
                          </div>{/* end columns */}
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2 search-btn">
                            <button className="btn btn-orange">Search</button>
                          </div>{/* end columns */}
                        </div>{/* end row */}
                      </form>
                    </div>{/* end flights */}
                    
                    
                    
                  
                  </div>{/* end tab-content */}
                </div>{/* end columns */}
              </div>{/* end row */}
            </div>{/* end container */}
          </div>{/* end search-tabs */}
        </section>{/* end flexslider-container */}
        {/*================= FLIGHT OFFERS =============*/}
        <section id="flight-offers" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-heading">
                  <h2>Flight Offers</h2>
                  <hr className="heading-line" />
                </div>{/* end page-heading */}
                <div className="row">
                  <div className="col-sm-6 col-md-4">
                    <div className="main-block flight-block">
                      <a href="flight-detail-right-sidebar.html">
                        <div className="flight-img">
                          <img src={flightimg1} className="img-responsive" alt="flight-img" />
                        </div>{/* end flight-img */}
                        <div className="flight-info">
                          <div className="flight-title">
                            <h3><span className="flight-destination">Spain</span>|<span className="flight-type">OneWay Flight</span></h3>
                          </div>{/* end flight-title */}
                          <div className=" flight-timing">
                            <ul className="list-unstyled">
                              <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 02-2017 </span>(8:40 PM)</li>
                              <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 03-2017 </span>(8:40 PM)</li>
                            </ul>
                          </div>{/* end flight-timing */}
                          <ul className="list-unstyled list-inline offer-price-1">
                            <li className="price">$568.00<span className="pkg">Avg/Person</span></li>
                            <li className="rating">
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star lightgrey" /></span>
                            </li>
                          </ul>
                        </div>{/* end flight-info */}
                      </a>
                    </div>{/* end flight-block */}
                  </div>{/* end columns */}
                  <div className="col-sm-6 col-md-4">
                    <div className="main-block flight-block">
                      <a href="flight-detail-right-sidebar.html">
                        <div className="flight-img">
                          <img src={flightimg2} className="img-responsive" alt="flight-img" />
                        </div>{/* end flight-img */}
                        <div className="flight-info">
                          <div className="flight-title">
                            <h3><span className="flight-destination">Spain</span>|<span className="flight-type">OneWay Flight</span></h3>
                          </div>{/* end flight-title */}
                          <div className=" flight-timing">
                            <ul className="list-unstyled">
                              <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 02-2017 </span>(8:40 PM)</li>
                              <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 03-2017 </span>(8:40 PM)</li>
                            </ul>
                          </div>{/* end flight-timing */}
                          <ul className="list-unstyled list-inline offer-price-1">
                            <li className="price">$568.00<span className="pkg">Avg/Person</span></li>
                            <li className="rating">
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star lightgrey" /></span>
                            </li>
                          </ul>
                        </div>{/* end flight-info */}
                      </a>
                    </div>{/* end flight-block */}
                  </div>{/* end columns */}
                  <div className="col-sm-6 col-md-4">
                    <div className="main-block flight-block">
                      <a href="flight-detail-right-sidebar.html">
                        <div className="flight-img">
                          <img src={flightimg3} className="img-responsive" alt="flight-img" />
                        </div>{/* end flight-img */}
                        <div className="flight-info">
                          <div className="flight-title">
                            <h3><span className="flight-destination">Spain</span>|<span className="flight-type">OneWay Flight</span></h3>
                          </div>{/* end flight-title */}
                          <div className=" flight-timing">
                            <ul className="list-unstyled">
                              <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 02-2017 </span>(8:40 PM)</li>
                              <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 03-2017 </span>(8:40 PM)</li>
                            </ul>
                          </div>{/* end flight-timing */}
                          <ul className="list-unstyled list-inline offer-price-1">
                            <li className="price">$568.00<span className="pkg">Avg/Person</span></li>
                            <li className="rating">
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star lightgrey" /></span>
                            </li>
                          </ul>
                        </div>{/* end flight-info */}
                      </a>
                    </div>{/* end flight-block */}
                  </div>{/* end columns */}
                  <div className="col-sm-6 col-md-4">
                    <div className="main-block flight-block">
                      <a href="flight-detail-right-sidebar.html">
                        <div className="flight-img">
                          <img src={flightimg4} className="img-responsive" alt="flight-img" />
                        </div>{/* end flight-img */}
                        <div className="flight-info">
                          <div className="flight-title">
                            <h3><span className="flight-destination">Spain</span>|<span className="flight-type">OneWay Flight</span></h3>
                          </div>{/* end flight-title */}
                          <div className=" flight-timing">
                            <ul className="list-unstyled">
                              <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 02-2017 </span>(8:40 PM)</li>
                              <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 03-2017 </span>(8:40 PM)</li>
                            </ul>
                          </div>{/* end flight-timing */}
                          <ul className="list-unstyled list-inline offer-price-1">
                            <li className="price">$568.00<span className="pkg">Avg/Person</span></li>
                            <li className="rating">
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star lightgrey" /></span>
                            </li>
                          </ul>
                        </div>{/* end flight-info */}
                      </a>
                    </div>{/* end flight-block */}
                  </div>{/* end columns */}
                  <div className="col-sm-6 col-md-4">
                    <div className="main-block flight-block">
                      <a href="flight-detail-right-sidebar.html">
                        <div className="flight-img">
                          <img src={flightimg5} className="img-responsive" alt="flight-img" />
                        </div>{/* end flight-img */}
                        <div className="flight-info">
                          <div className="flight-title">
                            <h3><span className="flight-destination">Spain</span>|<span className="flight-type">OneWay Flight</span></h3>
                          </div>{/* end flight-title */}
                          <div className=" flight-timing">
                            <ul className="list-unstyled">
                              <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 02-2017 </span>(8:40 PM)</li>
                              <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 03-2017 </span>(8:40 PM)</li>
                            </ul>
                          </div>{/* end flight-timing */}
                          <ul className="list-unstyled list-inline offer-price-1">
                            <li className="price">$568.00<span className="pkg">Avg/Person</span></li>
                            <li className="rating">
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star lightgrey" /></span>
                            </li>
                          </ul>
                        </div>{/* end flight-info */}
                      </a>
                    </div>{/* end flight-block */}
                  </div>{/* end columns */}
                  <div className="col-sm-6 col-md-4">
                    <div className="main-block flight-block">
                      <a href="flight-detail-right-sidebar.html">
                        <div className="flight-img">
                          <img src={flightimg} className="img-responsive" alt="flight-img" />
                        </div>{/* end flight-img */}
                        <div className="flight-info">
                          <div className="flight-title">
                            <h3><span className="flight-destination">Spain</span>|<span className="flight-type">OneWay Flight</span></h3>
                          </div>{/* end flight-title */}
                          <div className=" flight-timing">
                            <ul className="list-unstyled">
                              <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 02-2017 </span>(8:40 PM)</li>
                              <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 03-2017 </span>(8:40 PM)</li>
                            </ul>
                          </div>{/* end flight-timing */}
                          <ul className="list-unstyled list-inline offer-price-1">
                            <li className="price">$568.00<span className="pkg">Avg/Person</span></li>
                            <li className="rating">
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star lightgrey" /></span>
                            </li>
                          </ul>
                        </div>{/* end flight-info */}
                      </a>
                    </div>{/* end flight-block */}
                  </div>{/* end columns */}
                </div>{/* end row */}
                <div className="view-all text-center">
                  <a href="flight-grid-right-sidebar.html" className="btn btn-orange">View All</a>
                </div>{/* end view-all */}
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>{/* end flight-offers */}
        
        {/*========================= BEST FEATURES =======================*/}
        <section id="best-features" className="banner-padding lightgrey-features">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="b-feature-block">
                  <span><i className="fa fa-dollar" /></span>
                  <h3>Best Price Guarantee</h3>
                  
                </div>{/* end b-feature-block */}
              </div>{/* end columns */}
              <div className="col-sm-6 col-md-3">
                <div className="b-feature-block">
                  <span><i className="fa fa-lock" /></span>
                  <h3>Safe and Secure</h3>
                  
                </div>{/* end b-feature-block */}
              </div>{/* end columns */}
              <div className="col-sm-6 col-md-3">
                <div className="b-feature-block">
                  <span><i className="fa fa-thumbs-up" /></span>
                  <h3>Best Travel Agents</h3>
                  
                </div>{/* end b-feature-block */}
              </div>{/* end columns */}
              <div className="col-sm-6 col-md-3">
                <div className="b-feature-block">
                  <span><i className="fa fa-bars" /></span>
                  <h3>Travel Guidelines</h3>
                 
                </div>{/* end b-feature-block */}
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>{/* end best-features */}
        
        
        
        {/* Page Scripts Starts */}
        {/* Page Scripts Ends */}
      </div>
		)
	}
}