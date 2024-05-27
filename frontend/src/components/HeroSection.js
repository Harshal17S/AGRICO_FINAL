import React from "react";
import "../css/HeroSection.css";
import Navbar_ from "./Navbar_";
import Header from "../assests/Header.webp";
import crop from "../assests/crops-7247685-5882203.mp4";
import dance from "../assests/dance.png";
import org from "../assests/org.jpg";
import bg from "../assests/bg.mp4";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="hero-container" id="herosection">
      <Navbar_ />
      <div className="hero-top" data-aos="zoom-in-up">
        <button id="skipDiv-button">Take a tour</button>
        <p id="hero-top-text">
          Welcome to the platform{" "}
          <span>
            <br />
            Real Crop Bidding
          </span>
          <br />
          <span id="hero-gradient-text">Agrico</span>
        </p>
      </div>

      <div className="hero-bottom">
        <p id="hero-bottom-text">Connecting Communities, Sparking Profits </p>

        {/* <img data-aos="fade-up" data-aos-duration="3000" src={org} alt="" /> */}
        {/* <video data-aos="fade-up" data-aos-duration="3000" controls>
      <source src="/assets/bg.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video> */}
    

    <video className='videoTag' autoPlay loop muted style={{ width: '70%', height: '5%' }}>
      <source src={bg} type='video/mp4' />
      Your browser does not support the video tag.
    </video>
      </div>
    </div>
  );
};

export default HeroSection;
