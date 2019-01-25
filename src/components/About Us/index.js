import React from "react";
import tattoo from "./tattoo_design.png";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import img5 from "./img5.png";
import img6 from "./img6.png";
import img7 from "./img7.png";
import img8 from "./img8.png";
import img9 from "./img9.png";
import img10 from "./img10.png";
import img11 from "./img11.png";
import img12 from "./img12.png";
import "./index.sass";

const AboutUs = () => {
  return (
    <section className="about-us" id="about-us">
      <div className="info">
        <div className="info-img">
          <h3>About Us</h3>
        </div>
        <div className="info-text">
          <div className="text">
            <img src={tattoo} alt="tattoo" />
            <p>
              Aliquam ac justo interdum, elementum ligula et, condimentum orci.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              risus eros, ultricies quis erat sit amet, elementum vulputate
              lorem. Sed at lacinia lectus, quis blandit libero.
            </p>
            <p>
              Quisque ac malesuada lectus. Proin gravida feugiat commodo.
              Phasellus fermentum sem ut felis vehicula aliquet. Donec rhoncus,
              mi et euismod dictum, purus lorem vehicula justo, a iaculis mi
              nulla et risus.
            </p>
          </div>
        </div>
      </div>
      <div className="about-gallery">
        <div>
          <img src={img1} alt="img1" />
          <div className="overlay" />
        </div>
        <div>
          <img src={img2} alt="img2" />
          <div className="overlay" />
        </div>
        <div>
          <img src={img3} alt="img3" />
          <div className="overlay" />
        </div>
        <div>
          <img src={img4} alt="img4" />
          <div className="overlay" />
        </div>
        <div>
          <img src={img5} alt="img5" />
          <div className="overlay" />
        </div>
        <div>
          <img src={img6} alt="img6" />
          <div className="overlay" />
        </div>
        <div>
          <img src={img7} alt="img7" />
          <div className="overlay" />
        </div>
        <div>
          <img src={img8} alt="img8" />
          <div className="overlay" />
        </div>
        <div>
          <img src={img9} alt="img9" />
          <div className="overlay" />
        </div>
        <div>
          <img src={img10} alt="img10" />
          <div className="overlay" />
        </div>
        <div>
          <img src={img11} alt="img11" />
          <div className="overlay" />
        </div>
        <div>
          <img src={img12} alt="img12" />
          <div className="overlay" />
        </div>
      </div>
      <div className="quote">
        <div className="quote-text">
          <p>
            <span className="s"> </span>Aliquam ac justo interdum, elementum
            ligula et, condimentum orci. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.<span className="q"> </span>
            <span className="author">- john doe -</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
