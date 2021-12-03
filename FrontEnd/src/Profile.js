import React, { Component, Fragment, form } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import login from './images/login.jpg';
import Registration from './Registration';
import axios from 'axios';


export default class Profile extends Component {
  
	constructor(props) {
		super(props);

    
    this.state = {
       firstname:'',
       lastname:'',
       email: '',
       rewards:'',
       UserID:this.props.location.state
    }

    this.submitHandler = this.submitHandler.bind(this)
    this.changeFNHandler = this.changeFNHandler.bind(this)
    this.changeLNHandler = this.changeLNHandler.bind(this)
    this.changeEMHandler = this.changeEMHandler.bind(this)

    console.log("++++into profile+++");
    console.log(this.props.location.state);
    console.log("++++above profile+++");
    if(!(this.props.location.state && this.props.location.state !== '')){
      this.props.history.push('/Home');
    }
    
    console.log(this.props.location.state);

    axios.get('http://airlineapi.us-east-1.elasticbeanstalk.com/getInfo/'+this.props.location.state)
        .then(response => {
          console.log(response);
          if(response.status == 200) {
            
            this.setState({
              email : response.data.Email,
              firstname : response.data.firstName,
              lastname : response.data.lastName
            })
            console.log('====sss profile state ==');
            console.log(this.state);
          } else {
            this.props.history.push('/ErrPage');
          }
        }).catch(function (error) {
            console.log('Error', error.message);
        });

        axios.get('http://airlineapi.us-east-1.elasticbeanstalk.com/getRewards/'+this.props.location.state)
        .then(response => {
          console.log(response);
          if(response.status == 200) {
            console.log('====rewards ==');
            console.log(response);
            this.setState({
              rewards : response.data.rewards
            })
            
            
          } else {
            this.props.history.push('/ErrPage');
          }
        }).catch(function (error) {
            console.log('Error', error.message);
        });
	}

  changeFNHandler(event){
    this.setState({firstname: event.target.value})
  }

  changeLNHandler(event){
    this.setState({lastname: event.target.value})
  }

  changeEMHandler(event){
    this.setState({email: event.target.value})
  }

  submitHandler(){
    console.log("----update profile----")
    const param = {email:this.state.email, firstname:this.state.firstname, lastname:this.state.lastname, password:'password'}
    
    console.log(param)
    axios.post('http://airlineapi.us-east-1.elasticbeanstalk.com/'+this.state.UserID +'/edit', param)
        .then(response => {
          console.log(response);
          if(response.status == 200) {
            console.log('====update profile ==');
            console.log(response);
            console.log(this.state.UserID)
            console.log('==== profile leaving ==');
            this.props.history.push({pathname:'/confirm', state:this.state.UserID})
            
          } else {
            this.props.history.push('/ErrPage');
          }
        })
  }

	render() {
    console.log('====render  ==');
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
                    <li><span></span></li>
                    <li><span></span></li>
                  </ul>
                </div>{/* end info */}
              </div>{/* end columns */}
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div id="links">
                  <ul className="list-unstyled list-inline">
                  <li><Link to={{pathname:'/profile/', state:this.props.location.state}} ><span><i className="fa fa-lock" /></span>My Profile</Link></li>
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
                <a href="" className="search-button"><span><i className="fa fa-search" /></span></a>
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
        
        {/*========== PAGE-COVER =========*/}
        <section className="page-cover dashboard">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="page-title">My Account</h1>
                <ul className="breadcrumb">
                  <li><Link to="/">Home</Link></li>
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
                          <li className="active"><a href="#"><span><i className="fa fa-user" /></span>Profile</a></li>
                          <li><Link to={{pathname:'/booking', state:this.props.location.state}}><span><i className="fa fa-briefcase" /></span>Booking</Link></li>
                        </ul>
                      </div>{/* end columns */}
                      <div className="col-xs-12 col-sm-10 col-md-10 dashboard-content user-profile">
                        <h2 className="dash-content-title">My Profile</h2>
                        <div className="panel panel-default">
                          <div className="panel-heading"><h4>Profile Details</h4></div>
                          <div className="panel-body">
                            <div className="row">
                              
                             <div className="col-sm-7 col-md-8  user-detail">

                                <ul className="list-unstyled">
                                    <li><span>First Name:</span> <input type="text" className="form-control" value = {this.state.firstname} placeholder="firstname" name="firstname" onChange={this.changeFNHandler} required /></li>
                                    <li><span>Last Name:</span> <input type="text" className="form-control" value = {this.state.lastname} placeholder="lastname" name="lastname" onChange={this.changeLNHandler} required /></li>
                                    <li><span>Email</span> <input type="text" className="form-control" value = {this.state.email} placeholder="email" name="email" onChange={this.changeEMHandler} required /></li>
                                    <li><span>Rewards:</span> {this.state.rewards}</li>
                                </ul>
                                <button className="btn" data-target="#edit-profile" onClick={this.submitHandler}>Update Profile</button>
                            </div>
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