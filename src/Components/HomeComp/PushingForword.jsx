import React from "react";
import { Link } from "react-router-dom";
import "./Style/Pushing.css";

const PushingForword = () => {
  return (
    <div className="pushing_forword_container">
      <div className="pushing_forword_main_div">
        <h1>Keep pushing forward. We've got your back.</h1>
        <div className="pushing_mail_tags">
          <div>
            <img
              src='https://eep.io/images/yzco4xsimv0y/1ipIfBMtWd2aO37MZ1FXxl/df16a119af825588348369684ae69f7e/ILLO_Spot_Email_3_1080__1_.png?w=160&fm=webp&q=80'
              alt="..."
            />
            <h4>Award-winning support</h4>
            <p>Get the help you need, whenever you need it with our 24/7 support.</p>
            <a className="links" href="#">
              Learn more{" "}
            </a>
            {/* <Link >Learn more</Link> */}
          </div>
          <div>
            <img
            src='https://eep.io/images/yzco4xsimv0y/2q6xBaVYZKQyIiYiQg2oW8/679abd56f8fffd996ddca4ed5984105b/ILLO_Spot_Why-Mailchimp_Power-In-Numbers_1080x1080.png?w=160&fm=webp&q=80'
              alt="..."
            />
            <h4>250+ app integrations</h4>
            <p>You can connect all your tools to Mailchimp and unlock even more features.</p>
            <a className="links" href="#">
              Learn more{" "}
            </a>
          </div>
          <div>
            <img
            src='https://eep.io/images/yzco4xsimv0y/6jrVSU1WhOGG2sMqg2AqSG/7ad01c078427ca71403f92e7343d0673/ILLO_Mini-Spot_Best-Customers_3_520.png?w=160&fm=webp&q=80'
              alt="..."
            />
            <h4>A directory of trusted pros</h4>
            <p>Take your marketing to the next level when you work with a Mailchimp partner.</p>
            <a className="links" href="#">
              Browser Partner{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PushingForword;
