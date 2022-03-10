import React, {useEffect} from 'react';
import './LearnMore.css';
import Aos from "aos";
import "aos/dist/aos.css";
import {useLocation} from "react-router-dom";

function LearnMore(){
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={'main'}>
      <div data-aos={'fade-up'} id={'learn-more'}>
        <p id={'learn-more-title'}> Here's how we do it.</p>
        <p id={'learn-more-subtitle'}> A simple, but efficient solution. </p>
      </div>

      <div id={'echo-air-details'}>
        <p className={'echo-air-section-header'}> What is it? </p>
        <p> </p>
      </div>
    </div>
  )
}

export default LearnMore;
