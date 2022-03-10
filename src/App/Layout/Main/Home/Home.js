import React, {useEffect, useState} from "react";
import "./Home.css";
import FlightEmissions from "./FlightEmissions/FlightEmissions";
import Aos from "aos";
import "aos/dist/aos.css"
import earth from '../../../../assets/images/earth.png';
import {Link, useLocation} from "react-router-dom";
import decarbonization from '../../../../assets/images/decarbonization.png';
import climateRisk from '../../../../assets/images/climate-risk.png';
import biodiversity from '../../../../assets/images/biodiversity.png';
import {userFlightCommissionsPOST} from '../../../../API/FlightCommissionsService.ts'

function Home() {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])

  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={"main"}>
      <div id={"flight-emissions"} className={'website-section'} data-aos={'fade-up'}>
        <FlightEmissions/>
      </div>

      <div id={"home"}>
        <h1 data-aos={'fade-up'} className={'text-header'}> We're carbon neutral. </h1>
        <p data-aos={'fade-up'} id={'home-subtitle'}> And here is our solution. </p>
      </div>

      <div id={"subtitles-scroll"}>
        <p data-aos={'fade-up'} className={'subtitle-scroll'}> Innnovative </p>
        <p data-aos={'fade-up'} className={'subtitle-scroll'}> Powerful </p>
        <p data-aos={'fade-up'} className={'subtitle-scroll'}> Revolutionary </p>
      </div>

      <div id={'our-promise'}>
        <p data-aos={'fade-up'} className={'text-header'}> Our Promise </p>
        <p data-aos={'fade-up'} className={'subtitle'}>
          At KPMG, environmental sustainability is an integral part of our Promise Program.
          Here's how we're taking action.
        </p>
      </div>

      <div data-aos={'fade-up'} id={'our-commitments'}>
        <div id={'commitments-grid'}>
          <div className={'commitment'}>
            <p className={'grid-title'}> Decarbonization </p>
            <div className={'grid-image-container'}>
              {/* https://atos.net/en/lp/net-zero-infographic */}
              <img src={decarbonization} alt="decarbonization" className={'grid-image'}/>
            </div>
            <p className={'grid-subtitle'}> Achieve net-zero carbon emissions by 2030. </p>
          </div>

          <div className={'commitment'}>
            <p className={'grid-title'}> Climate risk </p>
            <div className={'grid-image-container'}>
              {/* https://www.climatesignals.org/climate-signals/wildfire-risk-increase */}
              <img src={climateRisk} alt="decarbonization" id={'grid-image-middle'} className={'grid-image'}/>
            </div>
            <p className={'grid-subtitle'}>
              Providing clear, comprehensive and high-quality information on the impacts of climate change.
            </p>
          </div>

          <div className={'commitment'}>
            <p className={'grid-title'}> Nature and biodiversity </p>
            <div className={'grid-image-container'}>
              {/* https://withersravenel.com/the-importance-of-nepa-documentation/nepa-icon-circle/ */}
              <img src={biodiversity} alt="decarbonization" className={'grid-image-bird'}/>
            </div>
            <p className={'grid-subtitle'}>
              Understanding and improving our impact on nature and biodiversity.
            </p>
          </div>
        </div>
      </div>

      <div id={'our-solution'}>
        {/* CREDIT IMG: https://icons8.com/illustrations/illustration/stripy-earth-1 */}
        <div id={'echo-air'}>
          <p id={'echo-air-title'}> ECO-AIR </p>
          <p id={'echo-air-subtitle'}> Our solution. </p>
          <Link to={'/KPMG/learn-more'}>
            <p id={'echo-air-learn-more'}>
              Learn more
            </p>
          </Link>
        </div>

        <img src={earth} alt="earth" id={'earth'}/>
      </div>
    </div>
  )
}

export default Home;
