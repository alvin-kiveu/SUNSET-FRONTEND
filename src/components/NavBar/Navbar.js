import React, { Component } from "react";
import "./Navbar.css";
import logo from '../../assets/sunsetlogo.png';


class NavBar extends Component {


  toggleMenu = () => {
    const navLinks = document.getElementsByClassName("nav-links")[0];
    if (navLinks.style.display === "block") {
      navLinks.style.display = "none"; // Hide it
    } else {
      navLinks.style.display = "block"; // Show it
    }
  }
  
  
  render() {
   
    return (
      <div className="nav">
        <div className="menu-toggle" onClick={this.toggleMenu}>
          <i className="fa fa-bars"></i> {/* Hamburger icon */}
        </div>
        <img src={logo} alt="logo" className="logo" />
        <div className="nav-links">
          <ul>
            <li className="dropdown">
              <a href="#">Beer</a>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
            <li className="dropdown">
              <a href="#">Wine</a>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
            <li className="dropdown">
              <a href="#">Liquor</a>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
            <li className="dropdown">
              <a href="#">Extra</a>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
            <li className="dropdown">
              <a href="#">Corprate</a>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
            <li className="dropdown">
              <a href="#">Gifts</a>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
          </ul>
        </div>
        <div className="search">
          <i className="fa fa-search search-icon"></i> {/* Search icon */}
          <input type="text" placeholder="Search" />
        </div>
        <div className="accountliinks">
          <a href="/signin">Sign In</a>
        </div>
        <div className="accountliinks">
          <a href="/signup">Create Account</a>
        </div>
        <div className="cart">
          <a href="#">
            <i className="fa fa-shopping-cart"></i>
            <span>Cart</span>
          </a>
        </div>

        <div className="menu-search-cart">
          <div className="search-mobile">
            <i className="fa fa-search search-icon"></i> {/* Search icon */}
          </div>
          <div className="cart-mobile">
            <a href="#">
              <i className="fa fa-shopping-cart"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
