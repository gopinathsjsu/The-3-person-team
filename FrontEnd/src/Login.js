import React, { Component, Fragment, form } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import login from './images/login.jpg';
import Registration from './Registration';
import axios from 'axios';


export default class Login extends Component {

	constructor(props) {
		super(props);

    this.state = {
       username: ''
    }
	}

  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }



  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);

    axios.post('https://sheet.best/api/sheets/5db50e57-6233-4f52-aa35-ac163073e053', this.state)
    .then(response => {
      console.log(response.status);
      console.log('======');
      console.log(this.state.username);
      if(response.status == 200) {
        console.log(this.state);
        this.props.history.push({pathname:'/Home', state:this.state.username});
      } else {
        this.props.history.push('/ErrPage');
      }
    })

  }

  


	render() {
		return(
      <div>
        <title>Login</title>
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
                    <li><span><i className="fa fa-map-marker" /></span></li>
                    <li><span><i className="fa fa-phone" /></span></li>
                  </ul>
                </div>{/* end info */}
              </div>{/* end columns */}
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div id="links">
                  <ul className="list-unstyled list-inline">
                    <li><Link to="/login"><span><i className="fa fa-lock" /></span>Login</Link></li>
                    <li><Link to="/registration"><span><i className="fa fa-plus" /></span>Sign Up</Link></li>
                    
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
                <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Home<span><i className="fa fa-angle-down" /></span></a>
		
                </li>
                <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Flights<span><i className="fa fa-angle-down" /></span></a>
	
                </li>
                
                
                <li><a href="" className="search-button"><span><i className="fa fa-search" /></span></a></li>
              </ul>
            </div>{/* end navbar collapse */}
          </div>{/* end container */}
        </nav>{/* end navbar */}
        
        {/*============= PAGE-COVER =============*/}
        <section className="page-cover" id="cover-login">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="page-title">Login Page</h1>
                <ul className="breadcrumb">
                  <li><Link to="/">Home</Link></li>
                  <li className="active">Login Page</li>
                </ul>
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>{/* end page-cover */}
        {/*===== INNERPAGE-WRAPPER ====*/}
        <section className="innerpage-wrapper">
          <div id="login" className="innerpage-section-padding">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="flex-content">
                    <div className="custom-form custom-form-fields">
                      <h3>Login</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <form className="form" onSubmit={this.submitHandler}>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Username" name="username" onChange={this.changeHandler} required />
                          <span><i className="fa fa-user" /></span>
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control" placeholder="Password" name="password" onChange={this.changeHandler} required />
                          <span><i className="fa fa-lock" /></span>
                        </div>
                        <div className="checkbox">
                          <label><input type="checkbox" /> Remember me</label>
                        </div>
                        <button className="btn btn-orange btn-block"><Link to='/Home'>Login</Link></button>
                      </form>
                      <div className="other-links">
                        <p className="link-line">New Here ? <Link to="/registration">Signup</Link></p>
                      </div>{/* end other-links */}
                    </div>{/* end custom-form */}
                    <div className="flex-content-img custom-form-img">
                      <img src={login} className="img-responsive" alt="registration-img" />
                    </div>{/* end custom-form-img */}
                  </div>{/* end form-content */}
                </div>{/* end columns */}
              </div>{/* end row */}
            </div>{/* end container */}         
          </div>{/* end login */}
        </section>{/* end innerpage-wrapper */}
        
        {/* Page Scripts Starts */}
        {/* Page Scripts Ends */}
      </div>
    );
  }
			
}