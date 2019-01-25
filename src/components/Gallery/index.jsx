import React from "react";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
import img6 from "./6.png";
import img7 from "./7.png";
import img8 from "./8.png";
import img9 from "./9.png";
import img10 from "./10.png";
import img11 from "./11.png";
import img12 from "./12.png";
import img13 from "./13.png";
import img14 from "./14.png";
import img15 from "./15.png";
import img16 from "./16.png";
import img17 from "./17.png";
import img18 from "./18.png";
import "./index.sass";

const Gallery = () => {
  return (
    <section className="gallery" id='gallery'>
      <div className="gal">
        <h3>Gallery</h3>
      </div>
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
      <div>
        <img src={img13} alt="img13" />
        <div className="overlay" />
      </div>
      <div>
        <img src={img14} alt="img14" />
        <div className="overlay" />
      </div>
      <div>
        <img src={img15} alt="img15" />
        <div className="overlay" />
      </div>
      <div>
        <img src={img16} alt="img16" />
        <div className="overlay" />
      </div>
      <div>
        <img src={img17} alt="img17" />
        <div className="overlay" />
      </div>
      <div>
        <img src={img18} alt="img18" />
        <div className="overlay" />
      </div>
    </section>
  );
};

export default Gallery;
