import React, {AnchorHTMLAttributes} from 'react';
import './ContactLink.css'

function ContactLink(props) {
  const {classNameIcon, socialText, showText, ...rest} = props;

  return (
    <li>
      <a className={"social-link"} {...rest}>
        <i className={classNameIcon}> </i>
        {showText ? <span className={"social-text"}> {socialText} </span> : null}
      </a>
    </li>
  )
}

export default ContactLink;
