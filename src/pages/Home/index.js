import React from "react";
import homeBg from "../../assets/images/header-bg.png";
import homeLogo from "../../assets/images/logo-header.png";
import mozzatHome from "../../assets/images/Mozzat.png";
import recipesBg from "../../assets/images/recipes-bg.png";
import ourRecipes from "../../assets/images/our-recipes.png";
import ProductsSection from "../sections/ProductsSection";
import GallerySection from "../sections/GallerySection";

const Home = () => {
  return (
    <div className="home">
      <div
        className="home-section"
        style={{
          backgroundImage: `url(${homeBg})`
        }}
      >
        <div
          className="content flex align-center justify-center"
          style={{ height: "100%" }}
        >
          <div>
            <div style={{ width: "205px", height: "234px", margin: "0 auto" }}>
              <img src={homeLogo} alt="home logo" />
            </div>

            <div style={{ maxWidth: "581px", width: "100%", height: "230px" }}>
              <img src={mozzatHome} alt="welcome" />
            </div>
          </div>
        </div>
      </div>

      <ProductsSection />

      <div
        className="recipes-section"
        style={{ backgroundImage: `url(${recipesBg})` }}
      >
        <div className="recipes-inner-bg">
          <div style={{ width: "111px", height: "55px", margin: "0 auto" }}>
            <img src={ourRecipes} />
          </div>
          <h2
            className="section-title"
            style={{ textAlign: "center", color: "#fff" }}
          >
            recipes
          </h2>
        </div>
      </div>

      <GallerySection />

      <div className="about-section">about section</div>
    </div>
  );
};

export default Home;
