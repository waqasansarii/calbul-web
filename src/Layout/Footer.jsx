import React from "react";
import { Link } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import SimpleMap from "../Components/Map";
import "./style.css";

const Footer = () => {
  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };

  return (
    <React.Fragment>
      <SimpleMap />
      <div className="footer_container">
        <div className="footer_m_layout">
          <div className="footer_layout">
            <div className="f_section">
              <h6>Products</h6>
              <ul className="f_sec_ul">
                <li>
                  <Link className="f_links">Why mailChimp</Link>
                </li>
                <li>
                  <Link className="f_links">Why mailChimp</Link>
                </li>
                <li>
                  <Link className="f_links">Why mailChimp</Link>
                </li>
                <li>
                  <Link className="f_links">Why mailChimp</Link>
                </li>
                <li>
                  <Link className="f_links">Why mailChimp</Link>
                </li>
              </ul>
            </div>
            <div className="f_section">
              <h6>Products</h6>
              <ul className="f_sec_ul">
                <li>
                  <Link className="f_links">Why mailChimp</Link>
                </li>
                <li>
                  <Link className="f_links">Why mailChimp</Link>
                </li>
                <li>
                  <Link className="f_links">Why mailChimp</Link>
                </li>
                <li>
                  <Link className="f_links">Why mailChimp</Link>
                </li>
                <li>
                  <Link className="f_links">Why mailChimp</Link>
                </li>
              </ul>
            </div>
            <div className="f_section">
              <h6>Products</h6>
              <ul className="f_sec_ul">
                <li>
                  <Link className="f_links">Why mailChimp</Link>
                </li>
                <li>
                  <Link className="f_links">Why mailChimp</Link>
                </li>
                <li>
                  <Link className="f_links">Why mailChimp</Link>
                </li>
                <li>
                  <Link className="f_links">Why mailChimp</Link>
                </li>
                <li>
                  <Link className="f_links">Why mailChimp</Link>
                </li>
              </ul>
            </div>
            <div className="f_section">
              <h6>Products</h6>
              <ul className="f_sec_ul">
                <li>
                  <Link className="f_links">Why mailChimp</Link>
                </li>
                <li>
                  <Link className="f_links">Why mailChimp</Link>
                </li>
                <li>
                  <Link className="f_links">Why mailChimp</Link>
                </li>
                <li>
                  <Link className="f_links">Why mailChimp</Link>
                </li>
                <li>
                  <Link className="f_links">Why mailChimp</Link>
                </li>
              </ul>
            </div>
            <div className="f_section">
              <h6>Products</h6>
              <ul className="f_sec_ul">
                <li>
                  <Link className="f_links">Why mailChimp</Link>
                </li>
                <li>
                  <Link className="f_links">Why mailChimp</Link>
                </li>
                <li>
                  <Link className="f_links">Why mailChimp</Link>
                </li>
                <li>
                  <Link className="f_links">Why mailChimp</Link>
                </li>
                <li>
                  <Link className="f_links">Why mailChimp</Link>
                </li>
              </ul>
            </div>
            <div className="f_section">
              <h6>Products</h6>
              <ul className="f_sec_ul">
                <li>
                  <Link className="f_links">Why mailChimp</Link>
                </li>
                <li>
                  <Link className="f_links">Why mailChimp</Link>
                </li>
                <li>
                  <Link className="f_links">Why mailChimp</Link>
                </li>
                <li>
                  <Link className="f_links">Why mailChimp</Link>
                </li>
                <li>
                  <Link className="f_links">Why mailChimp</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
