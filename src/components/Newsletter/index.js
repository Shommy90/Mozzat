import React from "react";

import newsletterTitle from "../../assets/images/newsletter.png";
import newsletterBg from "../../assets/images/newsletter-bg.png";

const Newsletter = () => {
  return (
    <div className="newsletter" style={{ background: `url(${newsletterBg})` }}>
      <div className="newsletter-inner">
        <div className="newsletter-wrap flex alitn-center justify-between">
          <div>
            <img src={newsletterTitle} alt="newsletter" />
          </div>
          <div className="form-holder">
            <form style={{ marginLeft: "20px" }} className="flex align-center">
              <div className="input-holder">
                <input type="email" placeholder="Enter Your Email Address" />
              </div>

              <button
                className="button"
                type="submit"
                onClick={e => e.preventDefault()}
              >
                subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
