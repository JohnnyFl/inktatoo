import React from "react";
import Socials from "../Socials/index";
import "./index.sass";

const Team = () => {
  return <section className="Team" id='team'>
      <div className="members">
        <div className="team-img">
          <h3>Team</h3>
        </div>
        <div className="correy" />
        <div className="correy-info">
          <div className="correy-info-text">
            <h2>Corey Miller</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc risus eros, ultricies quis erat sit amet, elementum vulputate lorem. Sed at lacinia lectus, quis blandit libero.
              <br /> Quisque ac malesuada lectus. Proin gravida feugiat commodo. Phasellus fermentum sem ut felis vehicula aliquet. Donec rhoncus, mi et euismod dictum, purus lorem vehicula justo, a iaculis mi nulla et risus.
            </p>
            <Socials />
          </div>
        </div>
        <div className="kat" />
        <div className="kat-info">
          <div className="kat-info-text">
            <h2>Kat Von D</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc risus eros, ultricies quis erat sit amet, elementum vulputate lorem. Sed at lacinia lectus, quis blandit libero.
              <br /> Quisque ac malesuada lectus. Proin gravida feugiat commodo. Phasellus fermentum sem ut felis vehicula aliquet. Donec rhoncus, mi et euismod dictum, purus lorem vehicula justo, a iaculis mi nulla et risus.
            </p>
            <Socials />
          </div>
        </div>
        <div className="form">
          <div className="form-wrapper">
            <h3>Newsletter</h3>
            <p>Join thousands of other people subscribe to our news</p>
            <form action="">
              <input type="email" placeholder="INSERT EMAIL" />
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className="tweet">
        <div className="tweet-text">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-twitter" />
          </a>

          <p>
            RT @collis: Trade growth ideas with other founders. Look for ways
            to cross promote. Small startups today may be big friends later.
            (9/10) 2 days ago
          </p>
        </div>
      </div>
    </section>;
};

export default Team;
