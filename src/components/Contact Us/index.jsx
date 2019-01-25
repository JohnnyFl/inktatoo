import React from "react";
import Socials from "../Socials/index";
import "./index.sass";

const Contact = () => {
  return (
    <section className="contact" id='contact'>
      <div className="wrapper">
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>
            Aliquam ac justo interdum, elementum ligula et, condimentum orci.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="wrapper-info-hours">
            <div className="info">
              <p>Info:</p>
              <p>
                Phone: <span>+ 123-456-789-456</span> <br />
                Fax: <span>+ 123-456-789-456</span> <br />
                Email : <span>info@inktattoo.net</span> <br />
                Adress : <span>1234 Street Road, City</span>
              </p>
            </div>
            <div className="hours">
              <p>Work Hours:</p>
              <p>
                Monday - Friday : <span>09am - 18pm</span> <br />
                Saturday : <span>09am - 1pm</span> <br />
                Sunday : <span>closed</span>
              </p>
            </div>
          </div>
          <div className="soc">
            <Socials />
          </div>
        </div>
        <div className="form">
          <form action="">
            <input type="text" placeholder="FULL NAME" />
            <input type="email" placeholder="EMAIL" />
            <textarea name="" id="" placeholder="MESSAGE" />
            <button>Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
