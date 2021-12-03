import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import './style.css';
import './css/bootstrap.min.css';
import './css/style.css';
import './css/responsive.css';
import './css/orange.css';
import './css/font-awesome.min.css';
import './css/flexslider.css';
import './css/datepicker.css';
import './css/magnific-popup.css';
import './css/owl.carousel.css';
import './css/owl.theme.css';
import './css/owl.carousel.css';
import landingslider1 from './images/landing-slider-1.jpg';
import Registration from './Registration';
import landingimage from './images/landing-slider-1.jpg';

class Home extends Component {

	constructor(props) {
		super(props);
    console.log("=====into====");
    console.log(this.props.location.state);
    this.goProfile = this.goProfile.bind(this);
	}

  goProfile(){
    console.log("=====goProfile====");
    console.log(this.props.location.state);
    console.log("=====user name====");
    var username = this.props.location.state;
    
    this.props.history.push({pathname:'/profile', state:username});
    console.log(username);
    console.log("=====end goProfile====");
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
                  {this.replaceLogin()}
                </div>{/* end links */}
              </div>{/* end columns */}       
            </div>{/* end row */}
          </div>{/* end container */}
        </div>{/* end top-bar */}
              
        {/*========================= FLEX SLIDER =====================*/}
      <section className="flexslider-container" id="flexslider-container-6" style={{"height":'600px'}}>
        <div className="header-absolute">
          <nav className="navbar navbar-default main-navbar navbar-custom navbar-transparent landing-page-navbar" id="mynavbar" >
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
                <Link to='/Home'><a href="#" className="navbar-brand"><span><i className="fa fa-plane" />SJSU</span></a></Link>
              </div>{/* end navbar-header */}
              <div className="collapse navbar-collapse" id="myNavbar1">
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown active"><Link to={{pathname:'/home', state:this.props.location.state}} className="dropdown-toggle" data-toggle="dropdown">Home</Link><span></span>  
                </li>
                <li className="dropdown"><Link to={{pathname:'/flighthome', state:this.props.location.state}} className="dropdown-toggle">Flights</Link><span></span>
                </li>
                
                <li></li>
              </ul>
            </div>{/* end navbar collapse */}
            </div>{/* end container */}
          </nav>{/* end navbar */}
        </div>{/* end header-absolute */}
        
        <div className="flexslider slider tour-slider" id="slider-6">
          <div className="slides">
            <div className="item-1 back-size" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(${landingimage})`, backgroundSize: 'cover', height: '100%'}}>
              <div className="meta">         
                <div className="container">
                  
                  <h2 style={{marginTop: '200px', textAlign: 'center', color:'white', fontSize:'40px'}}>Welcome!</h2>
                  
                </div>{/* end container */}  
              </div>{/* end meta */}
            </div>{/* end item-1 */}
          </div>
        </div>{/* end slider */}
      </section>{/* end flexslider-container */}
        {/*======================= BEST FEATURES =====================*/}
      <section id="best-features" className="banner-padding black-features">
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
      </div>
				)
}

}

export default Home;




