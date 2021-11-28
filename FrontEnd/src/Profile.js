import React, { Component, Fragment, form } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import login from './images/login.jpg';
import Registration from './Registration';
import axios from 'axios';


export default class Profile extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(
		<div>
        <title>User Profile</title>
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
                    <li><span><i className="fa fa-map-marker" /></span>29 Land St, Lorem City, CA</li>
                    <li><span><i className="fa fa-phone" /></span>+00 123 4567</li>
                  </ul>
                </div>{/* end info */}
              </div>{/* end columns */}
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div id="links">
                  <ul className="list-unstyled list-inline">
                    <li><a href="login.html"><span><i className="fa fa-lock" /></span>Login</a></li>
                    <li><a href="registration.html"><span><i className="fa fa-plus" /></span>Sign Up</a></li>
                    <li>
                      <form>
                        <ul className="list-inline">
                          <li>
                            <div className="form-group currency">
                              <span><i className="fa fa-angle-down" /></span>
                              <select className="form-control">
                                <option value>$</option>
                                <option value>£</option>
                              </select>
                            </div>{/* end form-group */}
                          </li>
                          <li>
                            <div className="form-group language">
                              <span><i className="fa fa-angle-down" /></span>
                              <select className="form-control">
                                <option value>EN</option>
                                <option value>UR</option>
                                <option value>FR</option>
                                <option value>IT</option>
                              </select>
                            </div>{/* end form-group */}
                          </li>
                        </ul>
                      </form>
                    </li>
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
                <a href="javascript:void(0)" className="search-button"><span><i className="fa fa-search" /></span></a>
              </div>
              <a href="#" className="navbar-brand"><span><i className="fa fa-plane" />STAR</span>TRAVELS</a>
            </div>{/* end navbar-header */}
            <div className="collapse navbar-collapse" id="myNavbar1">
              <ul className="nav navbar-nav navbar-right navbar-search-link">
                <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Home<span><i className="fa fa-angle-down" /></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="index.html">Main Homepage</a></li>
                    <li><a href="flight-homepage.html">Flight Homepage</a></li>
                    <li><a href="hotel-homepage.html">Hotel Homepage</a></li>
                    <li><a href="tour-homepage.html">Tour Homepage</a></li>
                    <li><a href="cruise-homepage.html">Cruise Homepage</a></li>
                    <li><a href="car-homepage.html">Car Homepage</a></li>
                    <li><a href="landing-page.html">Landing Page</a></li>
                  </ul>			
                </li>
                <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Flights<span><i className="fa fa-angle-down" /></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="flight-homepage.html">Flight Homepage</a></li>
                    <li><a href="flight-listing-left-sidebar.html">List View Left Sidebar</a></li>
                    <li><a href="flight-listing-right-sidebar.html">List View Right Sidebar</a></li>
                    <li><a href="flight-grid-left-sidebar.html">Grid View Left Sidebar</a></li>
                    <li><a href="flight-grid-right-sidebar.html">Grid View Right Sidebar</a></li>
                    <li><a href="flight-detail-left-sidebar.html">Detail Left Sidebar</a></li>
                    <li><a href="flight-detail-right-sidebar.html">Detail Right Sidebar</a></li>
                  </ul>			
                </li>
                <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Hotels<span><i className="fa fa-angle-down" /></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="hotel-homepage.html">Hotel Homepage</a></li>
                    <li><a href="hotel-listing-left-sidebar.html">List View Left Sidebar</a></li>
                    <li><a href="hotel-listing-right-sidebar.html">List View Right Sidebar</a></li>
                    <li><a href="hotel-grid-left-sidebar.html">Grid View Left Sidebar</a></li>
                    <li><a href="hotel-grid-right-sidebar.html">Grid View Right Sidebar</a></li>
                    <li><a href="hotel-detail-left-sidebar.html">Detail Left Sidebar</a></li>
                    <li><a href="hotel-detail-right-sidebar.html">Detail Right Sidebar</a></li>
                  </ul>			
                </li>
                <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Tours<span><i className="fa fa-angle-down" /></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="tour-homepage.html">Tour Homepage</a></li>
                    <li><a href="tour-listing-left-sidebar.html">List View Left Sidebar</a></li>
                    <li><a href="tour-listing-right-sidebar.html">List View Right Sidebar</a></li>
                    <li><a href="tour-grid-left-sidebar.html">Grid View Left Sidebar</a></li>
                    <li><a href="tour-grid-right-sidebar.html">Grid View Right Sidebar</a></li>
                    <li><a href="tour-detail-left-sidebar.html">Detail Left Sidebar</a></li>
                    <li><a href="tour-detail-right-sidebar.html">Detail Right Sidebar</a></li>
                  </ul>			
                </li>
                <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Cruise<span><i className="fa fa-angle-down" /></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="cruise-homepage.html">Cruise Homepage</a></li>
                    <li><a href="cruise-listing-left-sidebar.html">List View Left Sidebar</a></li>
                    <li><a href="cruise-listing-right-sidebar.html">List View Right Sidebar</a></li>
                    <li><a href="cruise-grid-left-sidebar.html">Grid View Left Sidebar</a></li>
                    <li><a href="cruise-grid-right-sidebar.html">Grid View Right Sidebar</a></li>
                    <li><a href="cruise-detail-left-sidebar.html">Detail Left Sidebar</a></li>
                    <li><a href="cruise-detail-right-sidebar.html">Detail Right Sidebar</a></li>
                  </ul>			
                </li>
                <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Cars<span><i className="fa fa-angle-down" /></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="car-homepage.html">Car Homepage</a></li>
                    <li><a href="car-listing-left-sidebar.html">List View Left Sidebar</a></li>
                    <li><a href="car-listing-right-sidebar.html">List View Right Sidebar</a></li>
                    <li><a href="car-grid-left-sidebar.html">Grid View Left Sidebar</a></li>
                    <li><a href="car-grid-right-sidebar.html">Grid View Right Sidebar</a></li>
                    <li><a href="car-detail-left-sidebar.html">Detail Left Sidebar</a></li>
                    <li><a href="car-detail-right-sidebar.html">Detail Right Sidebar</a></li>
                  </ul>			
                </li>
                <li className="dropdown active"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Pages<span><i className="fa fa-angle-down" /></span></a>
                  <ul className="dropdown-menu mega-dropdown-menu row">
                    <li>
                      <div className="row">
                        <div className="col-md-3">
                          <ul className="list-unstyled">
                            <li className="dropdown-header">Standard <span>Pages</span></li>
                            <li><a href="about-us.html">About Us</a></li>
                            <li><a href="contact-us.html">Contact Us</a></li>
                            <li><a href="blog-listing-left-sidebar.html">Blog Listing Left Sidebar</a></li>
                            <li><a href="blog-listing-right-sidebar.html">Blog Listing Right Sidebar</a></li>
                            <li><a href="blog-detail-left-sidebar.html">Blog Detail Left Sidebar</a></li>
                            <li><a href="blog-detail-right-sidebar.html">Blog Detail Right Sidebar</a></li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <ul className="list-unstyled">	
                            <li className="dropdown-header">User <span>Dashboard</span></li>
                            <li><a href="dashboard.html">Dashboard</a></li>
                            <li className="active"><a href="#">User Profile</a></li>
                            <li><a href="booking.html">Booking</a></li>
                            <li><a href="wishlist.html">Wishlist</a></li>
                            <li><a href="cards.html">Cards</a></li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <ul className="list-unstyled">
                            <li className="dropdown-header">Special <span>Pages</span></li>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="registration.html">Registration</a></li>
                            <li><a href="forgot-password.html">Forgot Password</a></li>
                            <li><a href="error-page.html">404 Page</a></li>
                            <li><a href="coming-soon.html">Coming Soon</a></li>   
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <ul className="list-unstyled">
                            <li className="dropdown-header">Extra <span>Pages</span></li>
                            <li><a href="before-you-fly.html">Before Fly</a></li>
                            <li><a href="travel-insurance.html">Travel Insurance</a></li>
                            <li><a href="holidays.html">Holidays</a></li>
                            <li><a href="thank-you.html">Thank You</a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>			
                </li>
                <li><a href="javascript:void(0)" className="search-button"><span><i className="fa fa-search" /></span></a></li>
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
                <a href="#home-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-home link-icon" /></span>Home<span><i className="fa fa-chevron-down arrow" /></span></a>
                <div className="collapse sub-menu" id="home-links">
                  <a href="index.html" className="list-group-item">Main Homepage</a>
                  <a href="flight-homepage.html" className="list-group-item">Flight Homepage</a>
                  <a href="hotel-homepage.html" className="list-group-item">Hotel Homepage</a>
                  <a href="tour-homepage.html" className="list-group-item">Tour Homepage</a>
                  <a href="cruise-homepage.html" className="list-group-item">Cruise Homepage</a>
                  <a href="car-homepage.html" className="list-group-item">Car Homepage</a>
                  <a href="landing-page.html" className="list-group-item">Landing Page</a>
                </div>{/* end sub-menu */}
                <a href="#flights-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-plane link-icon" /></span>Flights<span><i className="fa fa-chevron-down arrow" /></span></a>
                <div className="collapse sub-menu" id="flights-links">
                  <a href="flight-homepage.html" className="list-group-item">Flight Homepage</a>
                  <a href="flight-listing-left-sidebar.html" className="list-group-item">List View Left Sidebar</a>
                  <a href="flight-listing-right-sidebar.html" className="list-group-item">List View Right Sidebar</a>
                  <a href="flight-grid-left-sidebar.html" className="list-group-item">Grid View Left Sidebar</a>
                  <a href="flight-grid-right-sidebar.html" className="list-group-item">Grid View Right Sidebar</a>
                  <a href="flight-detail-left-sidebar.html" className="list-group-item">Detail Left Sidebar</a>
                  <a href="flight-detail-right-sidebar.html" className="list-group-item">Detail Right Sidebar</a>
                </div>{/* end sub-menu */}
                <a href="#hotels-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-building link-icon" /></span>Hotels<span><i className="fa fa-chevron-down arrow" /></span></a>
                <div className="collapse sub-menu" id="hotels-links">
                  <a href="hotel-homepage.html" className="list-group-item">Hotel Homepage</a>
                  <a href="hotel-listing-left-sidebar.html" className="list-group-item">List View Left Sidebar</a>
                  <a href="hotel-listing-right-sidebar.html" className="list-group-item">List View Right Sidebar</a>
                  <a href="hotel-grid-left-sidebar.html" className="list-group-item">Grid View Left Sidebar</a>
                  <a href="hotel-grid-right-sidebar.html" className="list-group-item">Grid View Right Sidebar</a>
                  <a href="hotel-detail-left-sidebar.html" className="list-group-item">Detail Left Sidebar</a>
                  <a href="hotel-detail-right-sidebar.html" className="list-group-item">Detail Right Sidebar</a>
                </div>{/* end sub-menu */}
                <a href="#tours-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-globe link-icon" /></span>Tours<span><i className="fa fa-chevron-down arrow" /></span></a>
                <div className="collapse sub-menu" id="tours-links">
                  <a href="tour-homepage.html" className="list-group-item">Tour Homepage</a>
                  <a href="tour-listing-left-sidebar.html" className="list-group-item">List View Left Sidebar</a>
                  <a href="tour-listing-right-sidebar.html" className="list-group-item">List View Right Sidebar</a>
                  <a href="tour-grid-left-sidebar.html" className="list-group-item">Grid View Left Sidebar</a>
                  <a href="tour-grid-right-sidebar.html" className="list-group-item">Grid View Right Sidebar</a>
                  <a href="tour-detail-left-sidebar.html" className="list-group-item">Detail Left Sidebar</a>
                  <a href="tour-detail-right-sidebar.html" className="list-group-item">Detail Right Sidebar</a>
                </div>{/* end sub-menu */}
                <a href="#cruise-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-ship link-icon" /></span>Cruise<span><i className="fa fa-chevron-down arrow" /></span></a>
                <div className="collapse sub-menu" id="cruise-links">
                  <a href="cruise-homepage.html" className="list-group-item">Cruise Homepage</a>
                  <a href="cruise-listing-left-sidebar.html" className="list-group-item">List View Left Sidebar</a>
                  <a href="cruise-listing-right-sidebar.html" className="list-group-item">List View Right Sidebar</a>
                  <a href="cruise-grid-left-sidebar.html" className="list-group-item">Grid View Left Sidebar</a>
                  <a href="cruise-grid-right-sidebar.html" className="list-group-item">Grid View Right Sidebar</a>
                  <a href="cruise-detail-left-sidebar.html" className="list-group-item">Detail Left Sidebar</a>
                  <a href="cruise-detail-right-sidebar.html" className="list-group-item">Detail Right Sidebar</a>
                </div>{/* end sub-menu */}
                <a href="#cars-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-car link-icon" /></span>Cars<span><i className="fa fa-chevron-down arrow" /></span></a>
                <div className="collapse sub-menu" id="cars-links">
                  <a href="car-homepage.html" className="list-group-item">Car Homepage</a>
                  <a href="car-listing-left-sidebar.html" className="list-group-item">List View Left Sidebar</a>
                  <a href="car-listing-right-sidebar.html" className="list-group-item">List View Right Sidebar</a>
                  <a href="car-grid-left-sidebar.html" className="list-group-item">Grid View Left Sidebar</a>
                  <a href="car-grid-right-sidebar.html" className="list-group-item">Grid View Right Sidebar</a>
                  <a href="car-detail-left-sidebar.html" className="list-group-item">Detail Left Sidebar</a>
                  <a href="car-detail-right-sidebar.html" className="list-group-item">Detail Right Sidebar</a>
                </div>{/* end sub-menu */}
                <a href="#pages-links" className="list-group-item active" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-clone link-icon" /></span>Pages<span><i className="fa fa-chevron-down arrow" /></span></a>
                <div className="collapse sub-menu" id="pages-links">
                  <div className="list-group-heading list-group-item">Standard <span>Pages</span></div>
                  <a href="about-us.html" className="list-group-item">About Us</a>
                  <a href="contact-us.html" className="list-group-item">Contact Us</a>
                  <a href="blog-listing-left-sidebar.html" className="list-group-item">Blog Listing Left Sidebar</a>
                  <a href="blog-listing-right-sidebar.html" className="list-group-item">Blog Listing Right Sidebar</a>
                  <a href="blog-detail-left-sidebar.html" className="list-group-item">Blog Detail Left Sidebar</a>
                  <a href="blog-detail-right-sidebar.html" className="list-group-item">Blog Detail Right Sidebar</a>
                  <div className="list-group-heading list-group-item">User <span>Dashboard</span></div>
                  <a href="dashboard.html" className="list-group-item">Dashboard</a>
                  <a href="#" className="list-group-item active">User Profile</a>
                  <a href="booking.html" className="list-group-item">Booking</a>
                  <a href="wishlist.html" className="list-group-item">Wishlist</a>
                  <a href="cards.html" className="list-group-item">Cards</a>
                  <div className="list-group-heading list-group-item">Special <span>Pages</span></div>
                  <a href="login.html" className="list-group-item">Login</a>
                  <a href="registration.html" className="list-group-item">Registration</a>
                  <a href="forgot-password.html" className="list-group-item">Forgot Password</a>
                  <a href="error-page.html" className="list-group-item">404 Page</a>
                  <a href="coming-soon.html" className="list-group-item">Coming Soon</a>
                  <div className="list-group-heading list-group-item">Extra <span>Pages</span></div>
                  <a href="before-you-fly.html" className="list-group-item">Before Fly</a>
                  <a href="travel-insurance.html" className="list-group-item">Travel Insurance</a>
                  <a href="holidays.html" className="list-group-item">Holidays</a>
                  <a href="thank-you.html" className="list-group-item">Thank You</a>
                </div>{/* end sub-menu */}
              </div>{/* end list-group */}
            </div>{/* end main-menu */}
          </div>{/* end mySidenav */}
        </div>{/* end sidenav-content */}
        {/*========== PAGE-COVER =========*/}
        <section className="page-cover dashboard">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="page-title">My Account</h1>
                <ul className="breadcrumb">
                  <li><a href="#">Home</a></li>
                  <li className="active">My Account</li>
                </ul>
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>{/* end page-cover */}
        {/*===== INNERPAGE-WRAPPER ====*/}
        <section className="innerpage-wrapper">
          <div id="dashboard" className="innerpage-section-padding">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="dashboard-heading">
                    <h2>Travel <span>Profile</span></h2>
                    <p>Hi Lisa, Welcome to Star Travels!</p>
                    <p>All your trips booked with us will appear here and you'll be able to manage everything!</p>
                  </div>{/* end dashboard-heading */}
                  <div className="dashboard-wrapper">
                    <div className="row">
                      <div className="col-xs-12 col-sm-2 col-md-2 dashboard-nav">
                        <ul className="nav nav-tabs nav-stacked text-center">
                          <li><a href="dashboard.html"><span><i className="fa fa-cogs" /></span>Dashboard</a></li>
                          <li className="active"><a href="#"><span><i className="fa fa-user" /></span>Profile</a></li>
                          <li><a href="booking.html"><span><i className="fa fa-briefcase" /></span>Booking</a></li>
                          <li><a href="wishlist.html"><span><i className="fa fa-heart" /></span>Wishlist</a></li>
                          <li><a href="cards.html"><span><i className="fa fa-credit-card" /></span>My Cards</a></li>
                        </ul>
                      </div>{/* end columns */}
                      <div className="col-xs-12 col-sm-10 col-md-10 dashboard-content user-profile">
                        <h2 className="dash-content-title">My Profile</h2>
                        <div className="panel panel-default">
                          <div className="panel-heading"><h4>Profile Details</h4></div>
                          <div className="panel-body">
                            <div className="row">
                              <div className="col-sm-5 col-md-4 user-img">
                                <img src="images/user-profile.jpg" className="img-responsive" alt="user-img" />
                              </div>{/* end columns */}
                              <div className="col-sm-7 col-md-8  user-detail">
                                <ul className="list-unstyled">
                                  <li><span>Name:</span> Lisa Jorge</li>
                                  <li><span>Date of Birth:</span> 25 Jan 1987</li>
                                  <li><span>Email:</span> youremail@gmail.com</li>
                                  <li><span>Phone:</span> +31 123 456 7890</li>
                                  <li><span>Address:</span> 23 Block, Lorem Ipsum, California.</li>
                                  <li><span>Country:</span> United States of America</li>
                                </ul>
                                <button className="btn" data-toggle="modal" data-target="#edit-profile">Edit Profile</button>
                              </div>{/* end columns */}
                              <div className="col-sm-12 user-desc">
                                <h4>About You</h4>
                                <p>Vestibulum tristique, justo eu sollicitudin sagittis, metus dolor eleifend urna, quis scelerisque purus quam nec ligula. Suspendisse iaculis odio odio, ac vehicula nisi faucibus eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere semper sem ac aliquet. Duis vel bibendum tellus, eu hendrerit sapien. Proin fringilla, enim vel lobortis viverra, augue orci fringilla diam, sed cursus elit mi vel lacus. Nulla facilisi. Fusce sagittis, magna non vehicula gravida, ante arcu pulvinar arcu, aliquet luctus arcu purus sit amet sem. Mauris blandit odio sed nisi porttitor egestas. Mauris in quam interdum purus vehicula rutrum quis in sem. Integer interdum lectus at nulla dictum luctus. Sed risus felis, posuere id condimentum non, egestas pulvinar enim. Praesent pretium risus eget nisi ullamcorper fermentum. Duis lacinia nisi ac rhoncus vestibulum.</p>
                              </div>{/* end columns */}
                            </div>{/* end row */}
                          </div>{/* end panel-body */}
                        </div>{/* end panel-detault */}
                      </div>{/* end columns */}
                    </div>{/* end row */}
                  </div>{/* end dashboard-wrapper */}
                </div>{/* end columns */}
              </div>{/* end row */}
            </div>{/* end container */}          
          </div>{/* end dashboard */}
        </section>{/* end innerpage-wrapper */}
        {/*========================= NEWSLETTER-1 ==========================*/}
        <section id="newsletter-1" className="section-padding back-size newsletter"> 
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                <h2>Subscribe Our Newsletter</h2>
                <p>Subscibe to receive our interesting updates</p>	
                <form>
                  <div className="form-group">
                    <div className="input-group">
                      <input type="email" className="form-control input-lg" placeholder="Enter your email address" required />
                      <span className="input-group-btn"><button className="btn btn-lg"><i className="fa fa-envelope" /></button></span>
                    </div>
                  </div>
                </form>
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>{/* end newsletter-1 */}
        {/*======================= FOOTER =======================*/}
        <section id="footer" className="ftr-heading-o ftr-heading-mgn-1">
          <div id="footer-top" className="banner-padding ftr-top-black ftr-text-white">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 footer-widget ftr-contact">
                  <h3 className="footer-heading">CONTACT US</h3>
                  <ul className="list-unstyled">
                    <li><span><i className="fa fa-map-marker" /></span>29 Land St, Lorem City, CA</li>
                    <li><span><i className="fa fa-phone" /></span>+00 123 4567</li>
                    <li><span><i className="fa fa-envelope" /></span>info@starhotel.com</li>
                  </ul>
                </div>{/* end columns */}
                <div className="col-xs-12 col-sm-6 col-md-2 col-lg-2 footer-widget ftr-links">
                  <h3 className="footer-heading">COMPANY</h3>
                  <ul className="list-unstyled">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Flight</a></li>
                    <li><a href="#">Hotel</a></li>
                    <li><a href="#">Tours</a></li>
                    <li><a href="#">Cruise</a></li>
                    <li><a href="#">Cars</a></li>
                  </ul>
                </div>{/* end columns */}
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 footer-widget ftr-links ftr-pad-left">
                  <h3 className="footer-heading">RESOURCES</h3>
                  <ul className="list-unstyled">
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Register</a></li>
                    <li><a href="#">Site Map</a></li>
                  </ul>
                </div>{/* end columns */}
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 footer-widget ftr-about">
                  <h3 className="footer-heading">ABOUT US</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.</p>
                  <ul className="social-links list-inline list-unstyled">
                    <li><a href="#"><span><i className="fa fa-facebook" /></span></a></li>
                    <li><a href="#"><span><i className="fa fa-twitter" /></span></a></li>
                    <li><a href="#"><span><i className="fa fa-google-plus" /></span></a></li>
                    <li><a href="#"><span><i className="fa fa-pinterest-p" /></span></a></li>
                    <li><a href="#"><span><i className="fa fa-instagram" /></span></a></li>
                    <li><a href="#"><span><i className="fa fa-linkedin" /></span></a></li>
                    <li><a href="#"><span><i className="fa fa-youtube-play" /></span></a></li>
                  </ul>
                </div>{/* end columns */}
              </div>{/* end row */}
            </div>{/* end container */}
          </div>{/* end footer-top */}
          <div id="footer-bottom" className="ftr-bot-black">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6" id="copyright">
                  <p>© 2017 <a href="http://www.bootstrapmb.com/">StarTravel</a>. All rights reserved.</p>
                </div>{/* end columns */}
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6" id="terms">
                  <ul className="list-unstyled list-inline">
                    <li><a href="#">Terms &amp; Condition</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                  </ul>
                </div>{/* end columns */}
              </div>{/* end row */}
            </div>{/* end container */}
          </div>{/* end footer-bottom */}
        </section>{/* end footer */}
        <div id="edit-profile" className="modal custom-modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
                <h3 className="modal-title">Edit Profile</h3>
              </div>{/* end modal-header */}
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" className="form-control" placeholder="Name" />
                  </div>{/* end form-group */}
                  <div className="form-group">
                    <label>Date of Birth</label>
                    <input type="text" className="form-control" placeholder="mm-dd-yy" />
                  </div>{/* end form-group */}
                  <div className="form-group">
                    <label>Your Email</label>
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>{/* end form-group */}
                  <div className="form-group">
                    <label>Your Phone</label>
                    <input type="text" className="form-control" placeholder="Phone Number" />
                  </div>{/* end form-group */}
                  <div className="form-group">
                    <label>Your Country</label>
                    <input type="text" className="form-control" placeholder="Country" />
                  </div>{/* end form-group */}
                  <div className="form-group">
                    <label>Your Address</label>
                    <input type="text" className="form-control" placeholder="Address" />
                  </div>{/* end form-group */}
                  <button className="btn btn-orange">Save Changes</button>
                </form>
              </div>{/* end modal-bpdy */}
            </div>{/* end modal-content */}
          </div>{/* end modal-dialog */}
        </div>{/* end edit-profile */}
        {/* Page Scripts Starts */}
        {/* Page Scripts Ends */}
      </div>
	  );
	}
}