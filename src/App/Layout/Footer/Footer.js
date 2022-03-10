import React, {useState} from "react";
import "./Footer.css";
import ContactLink from "./Common/ContactLink";
import ContactNav from "./Common/ContactNav";

function Footer() {
  return (
    <footer id="footer">
      <ContactNav showText={true}/>
    </footer>
  );
}

export default Footer;
