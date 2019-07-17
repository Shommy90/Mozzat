import React from "react";

import galleryBg from "../../assets/images/gallery-bg.png";
import galleryTitle from "../../assets/images/gallery-title.png";

import BeefBurger from "../../assets/images/gallery/beef-burger.jpg";
import BeefJucyLucy from "../../assets/images/gallery/beef-jucy-lucy.jpg";
import BeefBurger2 from "../../assets/images/gallery/beef-burger-2.jpg";
import KababLamb from "../../assets/images/gallery/kabab-lamb.jpg";
import KababChicken from "../../assets/images/gallery/kabab-chicken.jpg";
import ChickenWings from "../../assets/images/gallery/chicken-wings.jpg";
import Koftah from "../../assets/images/gallery/koftah.jpg";
import LambShank from "../../assets/images/gallery/lamb-shank.jpg";
import TBoneBeef from "../../assets/images/gallery/t-bone-beef.jpg";
import WholeChickenNormal from "../../assets/images/gallery/whole-chicken-normal.jpg";
import LambRack from "../../assets/images/gallery/lamb-rack.jpg";
import ShortLoinLamb from "../../assets/images/gallery/Short-loin-lamb.jpg";

const images = [
  { img: BeefBurger, name: "Beef Burger" },
  { img: BeefJucyLucy, name: "Beef Jucy Lucy" },
  { img: BeefBurger2, name: "Beef Burger 2" },
  { img: KababLamb, name: "Kabab Lamb" },
  { img: KababChicken, name: "Kabab Chicken" },
  { img: ChickenWings, name: "Chicken Wings" },
  { img: Koftah, name: "Koftah" },
  { img: LambShank, name: "Lamb Shank" },
  { img: TBoneBeef, name: "T-Bone Beef" },
  { img: WholeChickenNormal, name: "Whole Chicken Normal" },
  { img: LambRack, name: "Lamb Rack" },
  { img: ShortLoinLamb, name: "Short Loin Lamb" }
];

const Gallery = () => {
  return (
    <div className="gallery content">
      <div
        className="page-header"
        style={{ backgroundImage: `url(${galleryBg})` }}
      >
        <div className="dark-bg">
          <div
            className="header-title-holder"
            style={{ paddingBottom: "70px" }}
          >
            <div style={{ display: "inline-block" }}>
              <img src={galleryTitle} alt="title" />
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "100px 0" }}>
        <div className="gallery-wrapper">
          <div className="list-holder" style={{ marginBottom: "50px" }}>
            <ul className="gallery-list">
              {images.map((img, index) => (
                <li key={index} style={{ backgroundImage: `url(${img.img})` }}>
                  <div>{img.name}</div>
                </li>
              ))}
            </ul>
          </div>

          <button
            className="button"
            style={{ margin: "0 auto", display: "none" }}
          >
            load more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
