import React from "react";
import logo from "../../Assets/final.png";
import "./Style/Resources.css";

const Resources = () => {
  return (
    <React.Fragment>
      <div className="software_comp_container">
        <div className="software_content">
          <div>
            <h1>
              Mailchimp was recently named one of the best global software
              companies of 2021 by G2.
            </h1>
            <button className="custm_btn">See how we stack up</button>
          </div>
        </div>
      </div>
      <div className="software_doc_img">
        <img
          src="https://eep.io/images/yzco4xsimv0y/2ewurCGaai01QOo0c24QAq/dc5c8ae42584033c0851f19894ee1251/ILLO_Hero_Transactional-Sending_Receiving-1520.png?w=500&fm=webp&q=80"
          alt=""
        />
      </div>
      <div className="resources_container">
        <div className="resources_div">
          <div className="resources_head">
            <h1>Resources to give you the inside track</h1>
            <p>
              Looking to get ahead? We have expert guidance, timely resources,
              and inspiring stories from entrepreneurs who’ve been in your
              shoes. Business-growing shoes.
            </p>
          </div>
          <div className="resources_sections">
            <div className="resource_sec1">
              <div className="rerc_sec1_info">
                <div>
                  <p>MAILCHIMP WEBINARS</p>
                  <h1>Learn the Basics With Confidence</h1>
                  <p>
                    Just getting started? Our Support team offers a free webinar
                    series created for new Mailchimp users.
                  </p>
                  <button className="top_sect_btn">Register Now</button>
                </div>
              </div>
              <div className="card_sec_resources">
                <img
                  src="https://eep.io/images/yzco4xsimv0y/6VMsbdNkjEO64H4PxTe4l2/4ed449123a276986478b7cf05000b392/Homepage-Grid-5.18-BJs-Mobile-Giftshop-min.jpg?w=394&fm=webp&q=80"
                  alt="..."
                />
                <div className="r_sec_card_body">
                  <div>
                    <img className="logo" src={logo} alt="..." />
                    <span>Present</span>
                  </div>
                  <p>Short Film</p>
                  <h3>BJ'S Mobile Gift Shop</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Excepturi provident deserunt autem quibusdam culpa maiores
                    corrupti tempora aperiam vel, quod, incidunt beatae neque
                    sint ipsam fugiat. Eum ex voluptatum similique.
                  </p>
                  <a href="#">Watch Now</a>
                </div>
              </div>
            </div>
            <div className="r_sec_2">
              <div className="sec2_card_div">
                {/* <img src="https://eep.io/images/yzco4xsimv0y/BReNgBS5yKvZWRHihQG8f/6d75f3d62df93067535426019e42cef4/Homepage-Grid-5.18-courier.jpg?w=780" alt="..." /> */}
                <div className="sec2_card_info">
                  <img
                    src="https://eep.io/images/yzco4xsimv0y/7weFwlFvWp8qlUBHEXAhwV/735104a48851e1369ff3413ea392f720/Courier-Logo-With-Bird.png?w=240&fm=webp&q=80"
                    alt="..."
                  />
                  <div className="sec2card_body">

                  <p>Workshop</p>
                  <h4>Positioning Your Brand Right from the Start</h4>
                  <a href="#">Learn more</a>
                  </div>
                </div>
              </div>
              <div className="sec2_info_busns">
                <div className="bsns_expnd_img">
                  <img
                    src="https://eep.io/images/yzco4xsimv0y/vLc0HytcS7mgxvU16fiba/7ca3987a9a4675b8a15089a3fe6ae7b2/Homepage-Grid-How-To-Sell-a-Product-Online.png?w=394&fm=webp&q=80"
                    alt="..."
                  />
                </div>
                  <div className="bsns_expnd_info">
                    <p>Business Tips</p>
                    <h4> How To Sell a Product Online </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quae sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </p>
                    <a href="#">Learn more</a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lets_do_container">
        <div className="letsdo_content">
          <h1>Let’s do this</h1>
          <p>Every big idea starts with a small step forward.</p>
          <button className='top_sect_btn'>Pick A Plan</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Resources;
