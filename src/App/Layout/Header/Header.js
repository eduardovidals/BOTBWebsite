import React, {useState} from "react";
import "./Header.css";
import NavBar from "./Common/NavBar";
import {Link} from "react-router-dom";

function Header() {
  const [navMobileActive, setNavMobileActive] = useState(false);

  return (
    <header id={"header"}>
      <div id={"header-name"}>
        <Link to={'/KPMG'}>
          <p> KPMG </p>
        </Link>
      </div>

      <div id={'nav-container'}>
        <div id={"nav-bars"} onClick={() => setNavMobileActive(!navMobileActive)}>
          <div id={navMobileActive ? 'bar1-active' : 'bar1'} className={'bar'}/>
          <div id={navMobileActive ? 'bar2-active' : 'bar2'} className={'bar'}/>
          <div id={navMobileActive ? 'bar3-active' : 'bar3'} className={'bar'}/>
        </div>

        <NavBar show={navMobileActive} setNavMobileActive={setNavMobileActive}/>
      </div>
    </header>
  )
}

export default Header;
