import React from "react";
import { Link } from "react-router-dom";

import img01 from "../../../assets/images/t-bone-beef.png";
import img02 from "../../../assets/images/striplion-wagyu.png";
import img03 from "../../../assets/images/lamb-rack.png";
import img04 from "../../../assets/images/beef-burger.png";
import img05 from "../../../assets/images/beef-ribs.png";
import img06 from "../../../assets/images/beef-jucy-lucy.png";
import img07 from "../../../assets/images/awsal-beef.png";

const GallerySection = () => {
  return (
    <div className="gallery-section">
      <ul className="gallery-section__list">
        <li style={{ backgroundImage: `url(${img01})` }}>
          <div className="gallery__li-inner">inner</div>
          <div className="gallery__bottom-name">t-bone beef</div>
        </li>
        <li style={{ backgroundImage: `url(${img02})` }}>
          <div className="gallery__li-inner">inner</div>
          <div className="gallery__bottom-name">striplion wagyu</div>
        </li>
        <li style={{ backgroundImage: `url(${img03})` }}>
          <div className="gallery__li-inner">inner</div>
          <div className="gallery__bottom-name">lamb rack</div>
        </li>
        <li style={{ backgroundImage: `url(${img04})` }}>
          <div className="gallery__li-inner">inner</div>
          <div className="gallery__bottom-name">beef burger</div>
        </li>
        <li style={{ backgroundImage: `url(${img05})` }}>
          <div className="gallery__li-inner">inner</div>
          <div className="gallery__bottom-name">beef ribs</div>
        </li>
        <li style={{ backgroundImage: `url(${img06})` }}>
          <div className="gallery__li-inner">inner</div>
          <div className="gallery__bottom-name">beef jucy lucy</div>
        </li>
        <li style={{ backgroundImage: `url(${img07})` }}>
          <div className="gallery__li-inner">inner</div>
          <div className="gallery__bottom-name">awsal beef</div>
        </li>
        <li
          className="flex align-center justify-center"
          style={{ backgroundColor: "#f2f2f2", padding: "20px" }}
        >
          <Link to="/gallery" className="link-btn">
            view gallery
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default GallerySection;
