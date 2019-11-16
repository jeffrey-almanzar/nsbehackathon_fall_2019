import React from "react";
import facebook from "../assets/fb.png";
import instagram from "../assets/insta.png";
import gmail from "../assets/gmail.png";

function Contact(props) {
  return (
    <div id="contact" className="contact">
      <div className="social-media">
        <a target="_blank" href="https://www.facebook.com/Feed-the-Bronx-104430357691508/">
          <img src={facebook} alt="" />
        </a>
        <a href="">
          <img src={instagram} alt="" />
        </a>
        <a href="">
          <img src={gmail} alt="" />
        </a>
      </div>

      <div className="copy-right">
          <p className="copy-text">&copy;Feed the Bronx 2019</p>
      </div>
    </div>
  );
}

export default Contact;
