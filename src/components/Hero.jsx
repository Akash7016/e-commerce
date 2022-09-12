import React from "react";
import Products from "./Products";

function Hero() {
  const imgsrc =
    "https://images.unsplash.com/photo-1662763998567-aa57cac14a7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80";
  return (
    <div>
      <div className="card text-bg-dark border-0">
        <img src={imgsrc} className="img" alt="..." />
        <div className="card-img-overlay d-flex flex-column justify-content-center  ">
          <div className="container d-flex flex-column align-items-center ">
            <h5 className="card-title display-3 fw-bold text-uppercase">
              New Season Arrivals
            </h5>
            <p className="card-text lead fs-2">
              <small>Check Out All The Trends</small>
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Hero;
