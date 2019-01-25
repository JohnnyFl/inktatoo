import React from "react";
import logo from './Logo.png';
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./index.sass";

const Header = () => {
  return <header id="header">
      <nav>
        <ul>
          <li>
            <AnchorLink href="#about-us">About</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#team">Team</AnchorLink>
          </li>
          <li>
            <img src={logo} alt="logo" />
          </li>
          <li>
            <AnchorLink href="#gallery">Galley</AnchorLink>
          </li>
          <li>
          <AnchorLink href="#contact">Contact Us</AnchorLink>
          </li>
        </ul>
      </nav>
    </header>;
};

export default Header;
