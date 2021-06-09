import React from "react";
import "./style.css";

const Navbar = () => {
    window.addEventListener("scroll", function () {
        var header = document.querySelector(".nav_container");
        header.classList.toggle("sticky", window.scrollY > 100);
      });
  return (
    <div className='nav_container'>
      <nav className="navbar navbar-expand-lg navbar-light c_main_nav ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse custom_nav" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <div className="buttons_div">
                <button>Login</button>
                <button>Sign up  free</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
