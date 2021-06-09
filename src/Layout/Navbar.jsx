import React from "react";
import logo from '../Assets/final.svg'
import "./style.css";

const Navbar = () => {
  window.addEventListener("scroll", function () {
    var header = document.querySelector(".nav_container");
    header.classList.toggle("sticky", window.scrollY > 100);
  });
  return (
    <div className="nav_container">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Resources
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Inspiration
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul>
            <div>

            <a className="navbar-brand" href="#">
              <img className='logo' src={logo} alt="..." />
            </a>
            </div>
            <div className="d-flex">
              <div>
                <a className="Login_btn" href="#">
                  Login
                </a>
              </div>
              <div>
                <a className="Login_btn bg_clr_btn" href="#">
                  Sign up Free
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
