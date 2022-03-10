import React, {useEffect, useState} from 'react';
import ContactNav from "../../Footer/Common/ContactNav"
import "./NavBar.css"
import ContactLink from "../../Footer/Common/ContactLink";

function NavBar(props) {
  const {show, setNavMobileActive} = props;

  return (
    <div className={show ? 'nav nav-active' : 'nav'} onClick={() => setNavMobileActive(false)}>
      <ul id={'nav-links'}>
        <li>
          <div id={'annual-plan'}>
            Our Annual Plan
          </div>
        </li>
      </ul>

      <div id={"nav-contact"}>
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
      </div>
    </div>
  )
}

export default NavBar;
