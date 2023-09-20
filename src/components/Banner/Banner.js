import React, { Component } from "react";
import "./Banner.css";
import logo from '../../assets/sunsetlogo.png';

class Banner extends Component {
  render() {
    const serratedStyle = {
      width: "100%",
      padding: "4px 4px",
      border: "10px solid transparent",
      borderWidth: "0 0 10px 0", // Apply serrated border only to the top
      backgroundImage:
        "linear-gradient(#fff, #FE7901), " +
        "linear-gradient(to top left, transparent 20px, #FE7901 20px), " +
        "linear-gradient(to top right, transparent 20px, #FE7901 20px), " +
        "linear-gradient(to bottom left, transparent 20px, #FE7901 20px), " +
        "linear-gradient(to bottom right, transparent 20px, #FE7901 20px)",
      backgroundRepeat: "repeat, repeat-x, repeat-x, repeat-x, repeat-x",
      backgroundPosition: "0 0, 10px 0, 10px 0, 10px 100%, 10px 100%",
      backgroundSize: "auto auto, 20px 20px, 20px 20px, 20px 20px, 20px 20px",
      backgroundClip: "padding-box, border-box, border-box, border-box, border-box",
      backgroundOrigin: "padding-box, border-box, border-box, border-box, border-box"
    };
    return (
      <div className="banner  text-white text-center py-5" style={serratedStyle}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={logo} alt="Logo" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1 className="display-8">Discover the Best Drinks Near You</h1>
              <p className="lead">
                Find your favorite beer, wine, and liquor at the nearest
                stores.
              </p>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your address"
                />
                <div className="input-group-append">
                  <button className="btn btn-secondary" type="button">
                    <i className="fa fa-arrow-right mr-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
