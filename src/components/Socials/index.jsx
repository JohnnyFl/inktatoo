import React from "react";
import "./index.sass";

const Socials = () => {
  return (
    <div className="socials">
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-facebook-f" />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-twitter" />
      </a>
      <a href="https://www.tumblr.com/" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-tumblr" />
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-linkedin-in" />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-instagram" />
      </a>
      <a href="https://plus.google.com/discover" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-google-plus-g" />
      </a>
    </div>
  );
};

export default Socials;
