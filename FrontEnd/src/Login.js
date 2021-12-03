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
       UserID: '',
       password:''
    }

    console.log('====Login default ==');
    console.log(this.state);
	}

  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }



  submitHandler = e => {
    console.log('====in submitHandler ==');
    e.preventDefault();
    console.log('====in submitHandler ==');
    console.log(this.state);
    console.log('====out submitHandler ==');
    axios.post('http://airlineapi.us-east-1.elasticbeanstalk.com/login', this.state, {
            headers: {'Content-Type': 'application/json'}
          })
    .then(response => {
      console.log('====in ==');
      console.log(response);
      if(response.status == 200) {
        console.log(this.state);
        this.props.history.push({pathname:'/Home', state:this.state.UserID});
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
                <li className="dropdown active"><Link to='/home' className="dropdown-toggle" data-toggle="dropdown">Home</Link><span></span>  
                </li>
                <li className="dropdown"><Link to='/flighthome' className="dropdown-toggle">Flights</Link><span></span>
                </li>
                
                
                <li><span></span></li>
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
                          <input type="text" className="form-control" placeholder="UserID" name="UserID" onChange={this.changeHandler} required />
                          <span><i className="fa fa-user" /></span>
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control" placeholder="Password" name="password" onChange={this.changeHandler} required />
                          <span><i className="fa fa-lock" /></span>
                        </div>
                        <div className="checkbox">
                          <label><input type="checkbox" /> Remember me</label>
                        </div>
                        <button className="btn btn-orange btn-block">Login</button>
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