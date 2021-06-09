import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Style/WewillHelp.css";

const WeWillHelp = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="wewillHelp_container">
      <div className="wewillHelp_main_div">
        <div className="wewillHelp_sub_div">
          <h1>We’ll help you—</h1>
          <div className="wewillHelp_card_sec_div">
            <div
              className="wewillHelp_img_sec"
              data-aos="fade-up"
              data-aos-easing="ease-in"
            >
              <img
                src="https://eep.io/images/yzco4xsimv0y/8PAFv9LNhLFiOdEtAUFUc/fc439c7277c4d4e4603753c21f478c57/AUI_Homepage_03__1_.png?w=760&fm=webp&q=80"
                alt="..."
              />
            </div>
            <div className="wewillHelp_infoSec">
              <h3>Reach the right people</h3>
              <p>
                Put your people at the heart of your marketing with tools that
                help you get to know your audience and see who you should be
                talking to.
              </p>
              <a className="wewillHelp_link" href="#">
                Audience management tools
              </a>
            </div>
          </div>
          <div className="wewillHelp_card_sec_div">
            <div
              className="wewillHelp_img_sec"
              data-aos="fade-up"
              data-aos-easing="ease-in"
            >
              <img
                src="https://eep.io/images/yzco4xsimv0y/5kcvhCnCwzYZFNXXCnF9we/ea7e00388f180fc7db0ec6ab8bcaabf2/AUI_Homepage_04.png?w=760&fm=webp&q=80"
                alt="..."
              />
            </div>
            <div className="wewillHelp_infoSec">
              <h3>Reach the right people</h3>
              <p>
                Put your people at the heart of your marketing with tools that
                help you get to know your audience and see who you should be
                talking to.
              </p>
              <a className="wewillHelp_link" href="#">
                Audience management tools
              </a>
            </div>
          </div>
          <div className="wewillHelp_card_sec_div">
            <div
              className="wewillHelp_img_sec"
              data-aos="fade-up"
              data-aos-easing="ease-in"
            >
              <img
                src="https://eep.io/images/yzco4xsimv0y/5Fu3t8L5UBCrMhTEd6BYWR/5983f867e1046b322288649ce1ff70f2/AUI_Homepage_05__1_.png?w=760&fm=webp&q=80"
                alt="..."
              />
            </div>
            <div className="wewillHelp_infoSec">
              <h3>Reach the right people</h3>
              <p>
                Put your people at the heart of your marketing with tools that
                help you get to know your audience and see who you should be
                talking to.
              </p>
              <a className="wewillHelp_link" href="#">
                Audience management tools
              </a>
            </div>
          </div>
          <div className="wewillHelp_card_sec_div">
            <div
              className="wewillHelp_img_sec"
              data-aos="fade-up"
              data-aos-easing="ease-in"
            >
              <img
                src="https://eep.io/images/yzco4xsimv0y/EeFfCWDxp0PFcnmpzswM2/b56ac2efdf8f2b06a4824982d21749fb/AUI_Homepage_06__1_.png?w=760&fm=webp&q=80"
                alt="..."
              />
            </div>
            <div className="wewillHelp_infoSec">
              <h3>Reach the right people</h3>
              <p>
                Put your people at the heart of your marketing with tools that
                help you get to know your audience and see who you should be
                talking to.
              </p>
              <a className="wewillHelp_link" href="#">
                Audience management tools
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeWillHelp;
