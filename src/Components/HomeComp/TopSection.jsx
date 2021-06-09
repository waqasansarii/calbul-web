import React from "react";
import "./Style/TopSec.css";
const TopSection = () => {
  return (
    <div className="Top_sec_container">
      <div className="Top_sec_main_div">
        <div className="Top_sec_content_div">
          <h1>Marketing smarts for growing businesses</h1>
          <p>
            Mailchimp has the tools and resources you need to build a brand,
            sell online, and scale the business of your dreams.
          </p>
          <button className="top_sect_btn">Pick A Plan</button>
        </div>
        <div className="top_img_sect">
          <img
            src="https://eep.io/images/yzco4xsimv0y/1fVPaQFAADbFhdeLmlGjDu/4d90f4bc4003673ac0c076bf4917c5cc/GROW-Square.gif?w=760&q=70"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
