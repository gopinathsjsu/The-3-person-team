import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import registration from './images/registration.jpg';
import axios from 'axios';

export default class Booking extends Component {

	constructor(props) {
		super(props);

		if(!this.props.location.state || this.props.location.state == '') {
			this.props.history.push('/login');
		}

		this.state = {
			reserv:[],
			email:'',
			seatR:'',
			seatL:''
		}

		this.handleEMChange = this.handleEMChange.bind(this)
		this.handleSTRChange = this.handleSTRChange.bind(this)
		this.handleSTLChange = this.handleSTLChange.bind(this)
		this.cancelHandler = this.cancelHandler.bind(this)
		this.updateHandler = this.updateHandler.bind(this)

		axios.get('http://airlineapi.us-east-1.elasticbeanstalk.com/findorders/'+ this.props.location.state, {
            headers: {'Content-Type': 'application/json'}
          })
	    .then(response => {
	      console.log('====searchseat ==');
	      console.log(response);

	      if(response.status == 200) {
	        console.log('====got reserve response ==');
	        this.setState({reserv : response.data.orders})
			console.log(this.state.reserv);
	      } else {
	        this.props.history.push('/ErrPage');
	      }
	    })
	}

	cancelHandler(e){
		const param = {email:e.Email, reservationNumber:e.reservationNumber.toString()} //!!!!!!!todo
		axios.post('http://airlineapi.us-east-1.elasticbeanstalk.com/order/cancel', param, {
            headers: {'Content-Type': 'application/json'}
          })
	    .then(response => {
	      console.log('====searchseat ==');
	      console.log(response);

	      if(response.status == 200) {
	        console.log('====cancel success ==');
	        this.props.history.push({pathname:'/confirm', state:this.props.location.state})
	      } else {
	        this.props.history.push('/ErrPage');
	      }
	    })
	}
	updateHandler(e){
		const param = {email:e.Email, reservationNumber:e.reservationNumber.toString(), seatRow:this.state.seatR, seatLetter:this.state.seatL} //!!!!!!!todo
		console.log('====updating ==');
		console.log(param)
		axios.post('http://airlineapi.us-east-1.elasticbeanstalk.com/order/update', param, {
            headers: {'Content-Type': 'application/json'}
          })
	    .then(response => {
	      console.log('====searchseat ==');
	      console.log(response);

	      if(response.status == 200) {
	        console.log('====update success ==');
	        this.props.history.push({pathname:'/confirm', state:this.props.location.state})
	      } else {
	        this.props.history.push('/ErrPage');
	      }
	    })
	}

	handleEMChange(e){
		this.setState({email:e.target.value})
	}
	handleSTRChange(e){
		this.setState({seatR:e.target.value})
	}
	handleSTLChange(e){
		this.setState({seatL:e.target.value})
	}



	render(){
		console.log('====reserve before render==');
		console.log(this.state);
	    var seatsRow = ''
	    if(this.state && this.state.reserv) {
	    	console.log('====reserve ==');
		    seatsRow = this.state.reserv.map((d) => [<tr><td className="dash-list-text booking-list-detail">
                                    <h3>{d.flightNumber}</h3>
                                    <ul className="list-unstyled booking-info">
                                      <li><span>Seat:</span> <input type="text" className="form-control" name="seatRow" defaultValue={d.seatRow} placeholder="Seat Row" onChange={this.handleSTRChange} /><input type="text" className="form-control" name="seatLetter" defaultValue={d.seatLetter} placeholder="Seat Letter" onChange={this.handleSTLChange} /></li>
                                      <li><span>Email:</span> {d.Email}</li>
                                      <li><span>Payment:</span>{d.Payment}  </li>
                                    </ul>
                                  </td>
                                  <td className="dash-list-btn"><button className="btn btn-orange" onClick={() => this.cancelHandler(d)}>Cancel</button><button className="btn" onClick={() => this.updateHandler(d)}>Update</button></td>
                                  </tr>]);
	    }


		return (
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
                  <ul className="list-unstyled list-inline">
                    <li><Link to={{pathname:'/profile', state:this.props.location.state}} ><span><i className="fa fa-lock" /></span>My Profile</Link></li>
              		<li><Link to="/Home " ><span><i className="fa fa-lock" /></span>Sign Out</Link></li>
                    
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
                <a href="#" className="search-button"><span><i className="fa fa-search" /></span></a>
              </div>
              <a href="#" className="navbar-brand"><span><i className="fa fa-plane" />SJ</span>SU</a>
            </div>{/* end navbar-header */}
            <div className="collapse navbar-collapse" id="myNavbar1">
              <ul className="nav navbar-nav navbar-right navbar-search-link">
                <li className="dropdown active"><Link to={{pathname:'/home', state:this.props.location.state}} className="dropdown-toggle" data-toggle="dropdown">Home</Link><span></span>  
                </li>
                <li className="dropdown"><Link to={{pathname:'/flighthome', state:this.props.location.state}} className="dropdown-toggle">Flights</Link><span></span>
                </li>
                
                <li></li>
              </ul>
            </div>{/* end navbar collapse */}
          </div>{/* end container */}
        </nav>{/* end navbar */}
        
        {/*========= PAGE-COVER ==========*/}
        <section className="page-cover dashboard">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="page-title">My Account</h1>
                <ul className="breadcrumb">
                  <li><Link to='/home'>Home</Link></li>
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
                    <p>Welcome to SJSU Travels!</p>
                    <p>All your trips booked with us will appear here and you'll be able to manage everything!</p>
                  </div>{/* end dashboard-heading */}
                  <div className="dashboard-wrapper">
                    <div className="row">
                      <div className="col-xs-12 col-sm-2 col-md-2 dashboard-nav">
                        <ul className="nav nav-tabs nav-stacked text-center">
                          
                          <li><Link to={{pathname:'/profile', state:this.props.location.state}}><span><i className="fa fa-user" /></span>Profile</Link></li>
                          <li className="active"><a href="#"><span><i className="fa fa-briefcase" /></span>Booking</a></li>
                          
                        </ul>
                      </div>{/* end columns */}
                      <div className="col-xs-12 col-sm-10 col-md-10 dashboard-content booking-trips">
                        <h2 className="dash-content-title">Trips You have Booked!</h2>
                        <div className="dashboard-listing booking-listing">
                          
                          <div className="table-responsive">
                            <table className="table table-hover">
                              <tbody>
                              {seatsRow}
                                
                              </tbody>
                            </table>
                          </div>{/* end table-responsive */}
                        </div>{/* end booking-listings */}
                      </div>{/* end columns */}
                    </div>{/* end row */}
                  </div>{/* end dashboard-wrapper */}
                </div>{/* end columns */}
              </div>{/* end row */}
            </div>{/* end container */}          
          </div>{/* end dashboard */}
        </section>{/* end innerpage-wrapper */}
        
        {/* Page Scripts Starts */}
        {/* Page Scripts Ends */}
      </div>
		)
	}

}