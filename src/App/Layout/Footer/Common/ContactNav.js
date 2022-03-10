import React from "react";
import "./ContactNav.css";
import ContactLink from "./ContactLink";

function ContactNav() {
  return (
    <div id="contact-container">
      <ul>
        <ContactLink href="https://www.facebook.com/KPMGUS" target={"_blank"}
                     classNameIcon={'fa-brands fa-facebook'} socialText={'Facebook'} showText={false}/>
        <ContactLink href={"https://twitter.com/kpmg_us"} target={"_blank"}
                     classNameIcon={'fa-brands fa-twitter'}/>
        <ContactLink href="https://www.linkedin.com/in/kpmg" target={"_blank"}
                     classNameIcon={'fab fa-linkedin-in social-icon'} socialText={'LinkedIn'}
                     showText={false}/>
        <ContactLink href="https://www.youtube.com/user/KPMGMediaChannel" target={"_blank"}
                     classNameIcon={'fa-brands fa-youtube'} socialText={'YouTube'} showText={false}/>
      </ul>
    </div>
  )
}

export default ContactNav;
