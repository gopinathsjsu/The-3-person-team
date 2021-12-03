import React, { Component, Fragment, form } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import login from './images/login.jpg';
import Registration from './Registration';
import axios from 'axios';
import sjsu from './images/SJSU.png';
import ffeature1 from './images/f-feature-1.jpg';
import ffeature2 from './images/f-feature-2.jpg';
import ffeature3 from './images/f-feature-3.jpg';
import ffeature4 from './images/f-feature-4.jpg';
import ffeature5 from './images/f-feature-5.jpg';
import flightdetail from './images/flight-detail-tab-1.jpg';



export default class FlightDetail extends Component {
  
	constructor(props) {
		super(props);
		this.state = {
	       seats:[],
	       email:'',
	       firstname:'',
	       lastname:'',
	       flightseats:'',
	       flightNumber:this.props.location.state.flightNumber,
	       price:this.props.location.state.Price,
	       payment:'Credit Card',
	       start:this.props.location.state.Start,
	       destination:this.props.location.state.Destination,
	       UserID:this.props.location.state.email.email
	    }
		console.log('====FlightDetail cons  ==')
		console.log(this.props.location.state);
		console.log('====FlightDetail userid  ==')
		console.log(this.state.UserID)
		this.handleChange = this.handleChange.bind(this)
		this.handleSeatChange = this.handleSeatChange.bind(this)
		this.handlePayChange = this.handlePayChange.bind(this)
		this.onFormSubmit = this.onFormSubmit.bind(this)
		this.handleFNChange = this.handleFNChange.bind(this)
		this.handleLNChange = this.handleLNChange.bind(this)

		axios.get('http://airlineapi.us-east-1.elasticbeanstalk.com/searchseat/'+ this.props.location.state.flightNumber, {
            headers: {'Content-Type': 'application/json'}
          })
	    .then(response => {
	      console.log('====searchseat ==');
	      console.log(response);

	      if(response.status == 200) {
	        console.log('====got seat response ==');
	        this.setState({
	        	seats : response.data.seats
	        }) 
	        console.log(this.state.seats)

	      } else {
	        this.props.history.push('/ErrPage');
	      }
	    })
		/**/
	}

	handleChange(event){
		this.setState({email: event.target.value});
	}

	handleSeatChange(event){
		this.setState({flightseats: event.target.value});
	}

	handlePayChange(event){
		this.setState({payment: event.target.value});
	}

	handleFNChange(event){
		this.setState({firstname: event.target.value});
	}

	handleLNChange(event){
		this.setState({lastname: event.target.value});
	}

	onFormSubmit(e) {
		e.preventDefault();
		console.log('====FlightDetail onFormSubmit  ==')
		console.log(this.state.flightseats)
		const param = {flightNum: this.state.flightNumber, email:this.state.email, seatRow:this.state.flightseats.toString().charAt(0), seatLetter:this.state.flightseats.toString().substring(1), payment:this.state.payment}
		console.log(param)
		axios.post('http://airlineapi.us-east-1.elasticbeanstalk.com/purchase', param, {
            headers: {'Content-Type': 'application/json'}
          })
	    .then(response => {
	      console.log('====purhase respon ==');
	      console.log(response);

	      if(response.status == 200) {
	        console.log('====purchased succ ==');
	        const info = {reserveNum:response.data.reservationNumber.toString(), flightNum: this.state.flightNumber, email:this.state.email, firstname:this.state.firstname, lastname:this.state.lastname, UserID:this.state.UserID}
			this.props.history.push({pathname:'/success', state:info});
	      } else {
	        this.props.history.push('/ErrPage');
	      }
	    })
	}

	replaceLogin() {
      console.log("=====replaceLogin====");
      console.log(this.state.UserID);
      if(this.state.UserID && this.state.UserID !== '') {
        return(
          <ul className="list-unstyled list-inline">
              <li><Link to={{pathname:'/profile/', state:this.state.UserID}} ><span><i className="fa fa-lock" /></span>My Profile</Link></li>
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

	componentDidMount() {

		if(this.state.flightNumber & this.props.location.state.flightNumber) {
		this.state.flightNumber = this.props.location.state.flightNumber
	}
		
	}


	render() {
		console.log('====flight-detail before render ==');
	console.log(this.state);
    var seatsRow = ''
    if(this.state && this.state.seats) {
    	console.log('====asign seat ==');

	    seatsRow = this.state.seats.map((d) => [<option value={d.Row + d.Letter}>{d.Row}{d.Letter}</option>]);
    }
    
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
                  {this.replaceLogin() }
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
                <li className="dropdown"><Link to={{pathname:'/home', state:this.state.UserID}} className="dropdown-toggle" data-toggle="dropdown">Home<span></span></Link>
                  	
                </li>
                <li className="dropdown active"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Flights<span></span></a>
                  		
                </li>
                
                <li></li>
              </ul>
            </div>{/* end navbar collapse */}
          </div>{/* end container */}
        </nav>{/* end navbar */}
        
        {/*================== PAGE-COVER ================*/}
        <section className="page-cover" id="cover-flight-detail">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="page-title">Flight Detail</h1>
                <ul className="breadcrumb">
                  <li><a href="#">Home</a></li>
                  <li className="active">Flight Detail</li>
                </ul>
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>{/* end page-cover */}
        {/*===== INNERPAGE-WRAPPER ====*/}
        <section className="innerpage-wrapper">
          <div id="flight-details" className="innerpage-section-padding">
            <div className="container">
              <div className="row">        	
                <div className="col-xs-12 col-sm-12 col-md-3 side-bar left-side-bar">
                  <div className="side-bar-block booking-form-block">
                    <h2 className="selected-price">${this.state.price} <span>{this.state.flightNumber}</span></h2>
                    <div className="booking-form">
                      <h3>Book Flight</h3>
                      <p>Find your dream flight today</p>
                      <form onSubmit={ this.onFormSubmit }>
                        <div className="form-group">
                          <input type="text" className="form-control" name="firstname" placeholder="First Name" onChange={this.handleFNChange} required />                                       
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" name="lastname" placeholder="Last Name" onChange={this.handleLNChange} required />                                       
                        </div>
                        <div className="form-group">
                          <input type="email" className="form-control" placeholder="Email" name="email" onChange={this.handleChange} required />                                       
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Phone" required />                                       
                        </div>
                       
                        <div className="row">
                          <div className="col-sm-6 col-md-12 col-lg-6 no-sp-r">
                            <div className="form-group right-icon">
                              <select className="form-control">
                                <option selected>Adults</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                              </select>
                              <i className="fa fa-angle-down" />
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-12 col-lg-6 no-sp-l">    
                            <div className="form-group right-icon">
                              <select className="form-control" name="flightseats" value={this.state.flightseats} onChange={this.handleSeatChange}>
                                <option selected >Seats</option>
                                {seatsRow}
                              </select>
                              <i className="fa fa-angle-down" />
                            </div>
                          </div>
                        </div>
                        <div className="form-group right-icon">
                          <select className="form-control">
                            <option selected name="payment" value={this.state.payment} onChange={this.handlePayChange}>Payment Method</option>
                            <option>Credit Card</option>
                            <option>Paypal</option>
                          </select>
                          <i className="fa fa-angle-down" />
                        </div>
                        <div className="checkbox custom-check">
                          <input type="checkbox" id="check01" name="checkbox" />
                          <label htmlFor="check01"><span><i className="fa fa-check" /></span>By continuing, you are agree to the <a href="#">Terms &amp; Conditions.</a></label>
                        </div>
                        <button className="btn btn-block btn-orange">Confirm Booking</button>
                      </form>
                    </div>{/* end booking-form */}
                  </div>{/* end side-bar-block */}
                  <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-12">
                      <div className="side-bar-block main-block ad-block">
                        <div className="main-img ad-img">
                          <a href="#">
                            <img src={sjsu} className="img-responsive" alt="car-ad" />
                            
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
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 content-side">
                  <div className="detail-slider">
                    <div className="feature-slider">
                      <div><img src={ffeature1} className="img-responsive" alt="feature-img" /></div>
                    </div>{/* end feature-slider */}
                    
                    <ul className="list-unstyled features flight-features">
                      <li><div className="f-icon"><i className="fa fa-plane" /></div><div className="f-text"><p className="f-heading">From</p><p className="f-data">{this.state.start}</p></div></li>
                      <li><div className="f-icon"><i className="fa fa-plane" /></div><div className="f-text"><p className="f-heading">To</p><p className="f-data">{this.state.destination}</p></div></li>
                    </ul>
                  </div>{/* end detail-slider */}  
                  <div className="detail-tabs">
                    <ul className="nav nav-tabs nav-justified">
                      <li className="active"><a href="#flight-info" data-toggle="tab">Flight Information</a></li>
                      <li><a href="#entertainment" data-toggle="tab">Entertainment</a></li>
                      <li><a href="#connectivity" data-toggle="tab">Connectivity</a></li>
                      <li><a href="#fare" data-toggle="tab">Fare</a></li>
                      <li><a href="#baggage" data-toggle="tab">Baggage</a></li>
                    </ul>
                    <div className="tab-content">
                      <div id="flight-info" className="tab-pane in active">
                        <div className="row">
                          <div className="col-sm-4 col-md-4 tab-img">
                            <img src={flightdetail} className="img-responsive" alt="flight-detail-img" />
                          </div>{/* end columns */}
                          <div className="col-sm-8 col-md-8 tab-text">
                            <h3>Flight Information</h3>
                            <p>More flight information can be found here. </p>
                          </div>{/* end columns */}
                        </div>{/* end row */}
                      </div>{/* end flight-info */}
                      <div id="entertainment" className="tab-pane">
                        <div className="row">
                          <div className="col-sm-4 col-md-4 tab-img">
                            <img src="images/flight-detail-tab-2.jpg" className="img-responsive" alt="flight-detail-img" />
                          </div>{/* end columns */}
                          <div className="col-sm-8 col-md-8 tab-text">
                            <h3>Entertainment</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                          </div>{/* end columns */}
                        </div>{/* end row */}
                      </div>{/* end entertainment */}
                      <div id="connectivity" className="tab-pane">
                        <div className="row">
                          <div className="col-sm-4 col-md-4 tab-img">
                            <img src="images/flight-detail-tab-3.jpg" className="img-responsive" alt="flight-detail-img" />
                          </div>{/* end columns */}
                          <div className="col-sm-8 col-md-8 tab-text">
                            <h3>Connectivity</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.<br /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                          </div>{/* end columns */}
                        </div>{/* end row */}
                      </div>{/* end connectivity */}
                      <div id="fare" className="tab-pane">
                        <div className="row">
                          <div className="col-sm-4 col-md-4 tab-img">
                            <img src="images/flight-detail-tab-4.jpg" className="img-responsive" alt="flight-detail-img" />
                          </div>{/* end columns */}
                          <div className="col-sm-8 col-md-8 tab-text">
                            <h3>Fare</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                          </div>{/* end columns */}
                        </div>{/* end row */}
                      </div>{/* end fare */}
                      <div id="baggage" className="tab-pane">
                        <div className="row">
                          <div className="col-sm-4 col-md-4 tab-img">
                            <img src="images/flight-detail-tab-5.jpg" className="img-responsive" alt="flight-detail-img" />
                          </div>{/* end columns */}
                          <div className="col-sm-8 col-md-8 tab-text">
                            <h3>Baggage</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                          </div>{/* end columns */}
                        </div>{/* end row */}
                      </div>{/* end baggage */}
                    </div>{/* end tab-content */}
                  </div>{/* end detail-tabs */}
                  
                  
                </div>{/* end columns */}
              </div>{/* end row */}
            </div>{/* end container */}
          </div>{/* end flight-detail */}
        </section>{/* end innerpage-wrapper */}
        {/*======================= BEST FEATURES =====================*/}
        <section id="best-features" className="banner-padding black-features">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="b-feature-block">
                  <span><i className="fa fa-dollar" /></span>
                  <h3>Best Price Guarantee</h3>
                  <p></p>
                </div>{/* end b-feature-block */}
              </div>{/* end columns */}
              <div className="col-sm-6 col-md-3">
                <div className="b-feature-block">
                  <span><i className="fa fa-lock" /></span>
                  <h3>Safe and Secure</h3>
                  <p></p>
                </div>{/* end b-feature-block */}
              </div>{/* end columns */}
              <div className="col-sm-6 col-md-3">
                <div className="b-feature-block">
                  <span><i className="fa fa-thumbs-up" /></span>
                  <h3>Best Travel Agents</h3>
                  <p></p>
                </div>{/* end b-feature-block */}
              </div>{/* end columns */}
              <div className="col-sm-6 col-md-3">
                <div className="b-feature-block">
                  <span><i className="fa fa-bars" /></span>
                  <h3>Travel Guidelines</h3>
                  <p></p>
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
