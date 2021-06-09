import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Style/DoItMailChimp.css";

const DoITMailChimp = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="doit_mailChimp_container">
      <div className="doit_mailChimp_main_div">
        <div className="heading_div_do_it">
          <h1>See how it all comes together</h1>
        </div>
        <div className="doit_mailchimp_cards_section_div">
          <div className="doit_mail_chimp_sec_div">
            <div
              className="doit_mail_chimp_img_div"
              data-aos="fade-up"
              data-aos-easing="ease-in"
            >
              <img
                src="https://eep.io/images/yzco4xsimv0y/Hpcc2MBUuzNKRIgC9E623/0e1da2443f7efcc3eeff8beb422a463d/AUI_Homepage_07__1_.png?w=760&fm=webp&q=80"
                alt="..."
              />
            </div>
            <div className="doit_mailChimp_info_div">
              <h3>Connect your store to give regular emails a sales boost</h3>
              <p>
                Do more with your marketing using the power of analytics. Sync
                your store data and get pre-built customer segments based on
                purchase behavior to improve your sales.
              </p>
            </div>
          </div>
        </div>
        <div className="doit_mailchimp_cards_section_div Doit_maring">
          <div className="doit_mail_chimp_sec_div">
            <div className="doit_mailChimp_info_div">
              <h3>Pave the way to purchase</h3>
              <p>
                Put your customers on personalized journeys that lead them to
                checkout.
              </p>
            </div>
            <div
              className="doit_mail_chimp_img_div"
              data-aos="fade-up"
              data-aos-easing="ease-in"
            >
              <img
                src="https://eep.io/images/yzco4xsimv0y/2uVLoP5seijdqhgLrjwBLi/51a6db2c16bbb093efdaf1418735856a/AUI_Homepage_08__1_.png?w=760&fm=webp&q=80"
                alt="..."
              />
            </div>
          </div>
        </div>
        <div className="doit_mailchimp_cards_section_div">
          <div className="doit_mail_chimp_sec_div">
            <div
              className="doit_mail_chimp_img_div"
              data-aos="fade-up"
              data-aos-easing="ease-in"
            >
              <img
                src="https://eep.io/images/yzco4xsimv0y/OZzQgLmSlumkzOG2XCwlt/aaf8717919d3238f55e13f658e82693f/AUI_Homepage_09.png?w=760&fm=webp&q=80"
                alt="..."
              />
            </div>
            <div className="doit_mailChimp_info_div">
              <h3>Sit back and watch the results roll in</h3>
              <p>
                Track sales from first click to purchase. See who paid for what
                and how much money your campaign has earned.
              </p>
            </div>
          </div>
        </div>
        <div className="heading_div_do_it">
          <h1>Up to 6x more orders with automation</h1>
          <p>
            Make your marketing work harder so you can focus on running your
            business. Our data shows automations can generate up to 6 times more
            orders than bulk email alone.
          </p>
          <button className="top_sect_btn">See All Smarts</button>
        </div>
      </div>
    </div>
  );
};

export default DoITMailChimp;
