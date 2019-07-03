import React from "react";
import homeBg from "../../assets/images/header-bg.png";
import homeLogo from "../../assets/images/logo-header.png";
import mozzatHome from "../../assets/images/Mozzat.png";

const Home = () => {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${homeBg})`,
        backgroundSize: "auto",
        backgroundPosition: "center"
      }}
    >
      <div
        className="content flex align-center justify-center"
        style={{ background: "rgba(0,0,0, .7)", minHeight: "100vh" }}
      >
        <div>
          <div style={{ width: "205px", height: "234px", margin: "0 auto" }}>
            <img src={homeLogo} />
          </div>

          <div style={{ maxWidth: "581px", width: "100%", height: "230px" }}>
            <img src={mozzatHome} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
