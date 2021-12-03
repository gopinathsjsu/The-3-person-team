import React, { Component, Fragment, form } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import login from './images/login.jpg';
import Registration from './Registration';
import axios from 'axios';


export default class Success extends Component {
  
	constructor(props) {
		super(props);
	}

	replaceLogin() {
      console.log("=====replaceLogin====");
      console.log(this.props.location.state);
      if(this.props.location.state && this.props.location.state !== '') {
        return(
          <ul className="list-unstyled list-inline">
              <li><Link to={{pathname:'/profile/', state:this.props.location.state.UserID}} ><span><i className="fa fa-lock" /></span>My Profile</Link></li>
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

	render(){
		return(
	<div>

     
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
                <li className="dropdown"><Link to={{pathname:'/home', state:this.props.location.state.UserID}} className="dropdown-toggle" data-toggle="dropdown">Home<span></span></Link>
                  	
                </li>
                <li className="dropdown"><Link to={{pathname:'/flighthome', state:this.props.location.state.UserID}} className="dropdown-toggle" data-toggle="dropdown">Flights<span></span></Link>
                  		
                </li>
                
                <li></li>
              </ul>
            </div>{/* end navbar collapse */}
          </div>{/* end container */}
        </nav>{/* end navbar */}
        
        {/*================= PAGE-COVER ================*/}
        <section className="page-cover" id="cover-thank-you">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="page-title">Thank You</h1>
                <ul className="breadcrumb">
                  <li><a href="#">Home</a></li>
                  <li className="active">Thank You</li>
                </ul>
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>{/* end page-cover */}
        {/*==== INNERPAGE-WRAPPER =====*/}
        <section className="innerpage-wrapper">
          <div id="thank-you" className="innerpage-section-padding">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 content-side">
                  <div className="space-right">
                    <div className="thank-you-note">
                      <h3>Your Booking is confirmed now. Thank You!</h3>
                      <p></p>
                      <a href="#" className="btn btn-orange">Print Details</a>
                    </div>{/* end thank-you-note */}
                    <div className="traveler-info">
                      <h3 className="t-info-heading"><span><i className="fa fa-info-circle" /></span>Traveler Information</h3>
                      <div className="table-responsive">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>Booking Number:</td>
                              <td>{this.props.location.state.reserveNum}</td>
                            </tr>
                            <tr>
                              <td>Flight Number:</td>
                              <td>{this.props.location.state.flightNum}</td>
                            </tr>
                            <tr>
                              <td>First Name:</td>
                              <td>{this.props.location.state.firstname}</td>
                            </tr>
                            <tr>
                              <td>Last Name:</td>
                              <td>{this.props.location.state.lastname}</td>
                            </tr>
                            <tr>
                              <td>Email Address:</td>
                              <td>{this.props.location.state.email}</td>
                            </tr>
                            
                          </tbody>
                        </table>
                      </div>{/* end table-responsive */}
                      
                    </div>{/* end traveler-info */}
                  </div>{/* end space-right */}
                </div>{/* end columns */}
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 side-bar blog-sidebar right-side-bar">
                  <div className="row">    
                    
                    <div className="col-xs-12 col-sm-6 col-md-12">
                      <div className="side-bar-block contact">
                        <h2 className="side-bar-heading">Contact Us</h2>
                        <div className="c-list">
                          <div className="icon"><span><i className="fa fa-envelope" /></span></div>
                          <div className="text"><p>support@sjsu.com</p></div>
                        </div>{/* end c-list */}
                        <div className="c-list">
                          <div className="icon"><span><i className="fa fa-phone" /></span></div>
                          <div className="text"><p>+222 – 5548 656</p></div>
                        </div>{/* end c-list */}
                        <div className="c-list">
                          <div className="icon"><span><i className="fa fa-map-marker" /></span></div>
                          <div className="text"><p>1234, Main St, San Jose CA</p></div>
                        </div>{/* end c-list */}
                      </div>{/* end side-bar-block */}
                    </div>{/* end columns */}
                    <div className="col-xs-12 col-sm-12 col-md-12">
                      <div className="side-bar-block follow-us">
                        <h2 className="side-bar-heading">Follow Us</h2>
                        <ul className="list-unstyled list-inline">
                          <li><a href="#"><span><i className="fa fa-facebook" /></span></a></li>
                          <li><a href="#"><span><i className="fa fa-twitter" /></span></a></li>
                          <li><a href="#"><span><i className="fa fa-linkedin" /></span></a></li>
                          <li><a href="#"><span><i className="fa fa-google-plus" /></span></a></li>
                          <li><a href="#"><span><i className="fa fa-pinterest-p" /></span></a></li>
                        </ul>
                      </div>{/* end side-bar-block */}
                    </div>{/* end columns */}
                  </div>{/* end row */}
                </div>{/* end columns */}
              </div>{/* end row */}
            </div>{/* end container */}
          </div>{/* end thank-you */} 
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

			)
	}
}