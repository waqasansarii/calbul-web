import React, { useEffect } from "react";
import "./Style/DoItMailChimp.css";
import AOS from "aos";
import "aos/dist/aos.css";

const DoITMailChimp = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="doit_mailChimp_container">
      <div className="doit_mailChimp_main_div">
        <div className="heading_div_do_it">
          <h1>Do it all with Mailchimp</h1>
          <p>
            Bring your audience data, marketing channels, and insights together
            so you can reach your goals faster—all from a single platform.
          </p>
        </div>
        <div className="doit_mailchimp_cards_section_div">
          <div className="doit_mail_chimp_sec_div">
            <div
              className="doit_mailChimp_info_div"
              data-aos="zoom-in"
              data-aos-easing="ease-in-out"
            >
              <h3>Get your business online</h3>
              <p>
                Give your brand a home with a custom domain. Then launch a
                website to sell products or take appointments, all with built-in
                marketing tools to help you boost sales and find fans.
              </p>
              <button className='custm_btn'>Website and stores</button>
            </div>
            <div
              className="doit_mail_chimp_img_div"
              data-aos="fade-up"
              data-aos-easing="ease-in"
            >
              <img
                src="https://eep.io/images/yzco4xsimv0y/4ALLla8AlmkPgrIAzEUYXU/ee50f0b05e9db06f43e0394f2ee5c16f/AUI_Homepage_01_tall.png?w=760&fm=webp&q=80"
                alt="..."
              />
            </div>
          </div>
        </div>
        <div className="doit_mailchimp_cards_section_div Doit_maring">
          <div className="doit_mail_chimp_sec_div">
            <div className="doit_mailChimp_info_div">
              <h3>Market your business</h3>
              <p>
                Send the right messages on all the right channels. Build emails,
                social ads, landing pages, postcards, and more from one place.
              </p>
              <button className='custm_btn'>Marketing campaigns</button>
            </div>
            <div
              className="doit_mail_chimp_img_div"
              data-aos="fade-up"
              data-aos-easing="ease-in"
            >
              <img
                src="https://eep.io/images/yzco4xsimv0y/5if8Ua2iHjB1sEVsNjlG4z/7f977634fbe96a33c48d96faf2f34008/AUI_Homepage_02.png?w=760&fm=webp&q=80"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoITMailChimp;
