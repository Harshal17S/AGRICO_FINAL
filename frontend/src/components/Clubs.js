import React from "react";
import "../css/Club.css";

import Marquee from "react-fast-marquee";

import AllIndiaKishan from "../assests/_1_Allindiakishan.png";
import centraloragnistaionbhopal from "../assests/_1_centraloragnistaionbhopal.png";
import Gene from "../assests/_1_Genecampagian.png";
import kera from "../assests/_1_Kerafed.png";
import Dance from "../assests/_1_ministryofagriculture.png";
import Bank from "../assests/_1_nationalbankofagriculture.png";
import NIAM from "../assests/_1_centraloragnistaionbhopal.png";

import Organic from "../assests/_1_oraganicfarming.png";
import Primary from "../assests/_1_primaryagriculture.png";
import tamilnadu from "../assests/_1_Tamilnadu.png";

const Clubs = () => {
  const handlefirst = () => {
    console.log("Working");
    window.open("www.youtube.com");
  };
  return (
    <div className="clubs-container" id="clubs">
      <br />
      <br />
      <br />
      <h1 style={{ color: "aliceblue" }}>Organisations</h1>
      <p id="clubs-container-heading">
        Get the opputunity to join Organisations
        <br />
        <span>Get latest updates about them</span>
      </p>
      <br />
      <br />
      <br />
      <br />
      <Marquee pauseOnHover="true">
            <div className="clubs-div">
            <img
            id="club-imgs"
            src={AllIndiaKishan}
            alt=""
            style={{ padding: "1rem" }}
          />
          <h3 id="clubs-text">
            <a
              href="https://aikscc.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="club-link"
            >
              AllIndiaKishan
            </a>
          </h3>
        </div>
        <div className="clubs-div">
          <img
            id="club-imgs"
            src={centraloragnistaionbhopal}
            alt=""
            style={{ padding: "1rem" }}
          />
          <h3 id="clubs-text">
            <a
              href="https://ciae.icar.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="club-link"
            >
              centraloragnistaionbhopal
            </a>
          </h3>
        </div>
        <div className="clubs-div">
          <img id="club-imgs" src={Gene} alt="" style={{ padding: "1rem" }} />
          <h3 id="clubs-text">
            <a
              href="https://genecampaign.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="club-link"
            >
              Gene Campaign
            </a>
          </h3>
        </div>
        <div className="clubs-div">
          <img id="club-imgs" src={kera} alt="" style={{ padding: "1rem" }} />
          <h3 id="clubs-text">
            <a
              href="https://kerafed.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="club-link"
            >
              KERAFED
            </a>
          </h3>
        </div>
        <div className="clubs-div">
          <img
            id="club-imgs"
            src={Primary}
            alt=""
            style={{ padding: "1rem" }}
          />
          <h3 id="clubs-text">
            <a
              href="https://www.cooperation.gov.in/about-primary-agriculture-cooperative-credit-societies-pacs"
              target="_blank"
              rel="noopener noreferrer"
              className="club-link"
            >
              Primary Agriculture
            </a>
          </h3>
        </div>
      </Marquee>
      <br />
      <Marquee pauseOnHover="true" direction="right">
      <div className="clubs-div">
  <img id="club-imgs" src={Dance} alt="" style={{ padding: "1rem" }} />
  <h3 id="clubs-text">
    <a
      href="https://agriwelfare.gov.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="club-link"
    >
      Ministry of Agriculture
    </a>
  </h3>
</div>
<div className="clubs-div">
  <img id="club-imgs" src={Bank} alt="" style={{ padding: "1rem" }} />
  <h3 id="clubs-text">
    <a
      href="https://www.nabard.org/"
      target="_blank"
      rel="noopener noreferrer"
      className="club-link"
    >
      Bank of Agriculture
    </a>
  </h3>
</div>
<div className="clubs-div">
  <img id="club-imgs" src={NIAM} alt="" style={{ padding: "1rem" }} />
  <h3 id="clubs-text">
    <a
      href="https://ccsniam.gov.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="club-link"
    >
      NIAM
    </a>
  </h3>
</div>



<div className="clubs-div">
  <img id="club-imgs" src={Organic} alt="" style={{ padding: "1rem" }} />
  <h3 id="clubs-text">
    <a
      href="https://ofrf.org/"
      target="_blank"
      rel="noopener noreferrer"
      className="club-link"
    >
      Organic Farming
    </a>
  </h3>
</div>
<div className="clubs-div">
  <img id="club-imgs" src={tamilnadu} alt="" style={{ padding: "1rem" }} />
  <h3 id="clubs-text">
    <a
      href="https://tnau.ac.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="club-link"
    >
      Tamilnadu Agriculture
    </a>
  </h3>
</div>

      </Marquee>
    </div>
  );
};

export default Clubs;
