import React, {useEffect, useState} from 'react';
import "./FlightEmissions.css";
import {userFlightCommissionsPOST} from "../../../../../API/FlightCommissionsService.ts";
import TitledInput from "../Common/TitledInput";
import Aos from "aos";
import "aos/dist/aos.css";
import tree from '../../../../../assets/images/tree.png';
import windMill from '../../../../../assets/images/windmill.png';
import plane from '../../../../../assets/images/plane.png';
import solar from '../../../../../assets/images/solar-panel.png';
import water from '../../../../../assets/images/water.png';

function FlightEmissions() {
  const [fromPC, setFromPC] = useState();
  const [toPC, setToPC] = useState();
  const [emissionText, setEmissionText] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [totalCarbon, setTotalCarbon] = useState();

  useEffect( () => {
    Aos.init({duration: 2000});
  }, [])

  const calculateEmission = async () => {
    const response = await userFlightCommissionsPOST([
      {
        from: fromPC && fromPC.trim(),
        to: toPC && toPC.trim(),
        passengers: 1,
        class: 'first'
      }
    ]).then(res => {
      console.log(JSON.stringify(res, null, 2));
      setEmissionText(`Your total carbon emission was <b style="font-size: 3vw">${res.data.co2e.toFixed(2)} ${res.data.co2e_unit}</b>`);
      setTotalCarbon(res.data.co2e.toFixed(2))
      return res;
    }).catch(e => {
      setEmissionText(`${e.message}`);
    });

    setIsClicked(true);
  }

  return (
    <>
      <h1 id={'postal-code-header'}> Find out your carbon footprint. </h1>
      <div id={'from-to'}>
        <TitledInput title={'From'} placeholder={'DFW'} onChange={(e) => {
          setFromPC(e.target.value)
        }}/>
        <TitledInput title={'To'} placeholder={'EWR'} onChange={(e) => {
          setToPC(e.target.value)
        }
        }/>
      </div>
      <div id={'from-to-submit'} onClick={calculateEmission}>
        Calculate Emission
      </div>

      <p style={{fontSize: '2vw'}} dangerouslySetInnerHTML={{__html: emissionText}}/>
      {/* wind mills, trees, airbus (hydrogen planes), solar panels, eco-air*/}
      {
        isClicked ?
          <>
            <p data-aos={'fade-up'} id={'contribute'}> How you can contribute </p>
            <div data-aos={'fade-up'} id={'solutions-now'}>
              <a href="https://onetreeplanted.org/" target={'_blank'}>
                <div className={'solution'}>
                  <p className={'solution-title'}> Plant Trees </p>
                  <div className={'image-container'}>
                    <img src={tree} alt="tree" className={'solution-image'}/>
                  </div>
                  <p className={'solution-subtitle'}> Donate for <b style={{fontSize: '2vw'}}>{Math.ceil(totalCarbon/0.4536) } trees </b> to get planted. </p>
                </div>
              </a>

              <a href="https://www.airbus.com/en" target={'_blank'}>
                <div className={'solution'}>
                  <p className={'solution-title'}> Hydrogen Planes </p>
                  <div className={'image-container'}>
                    <img src={plane} alt="plane" className={'solution-image'}/>
                  </div>
                  <p className={'solution-subtitle'}> Take a flight in a hydrogen plane and save up to <b style={{fontSize: '2vw'}}> {totalCarbon} kg </b> of carbon. </p>
                </div>
              </a>

              <a href="https://solar-aid.org/" target={'_blank'}>
                <div className={'solution'}>
                  <p className={'solution-title'}> Solar Panels </p>
                  <div className={'image-container'}>
                    <img src={solar} alt="solarpanels" className={'solution-image'}/>
                  </div>
                  <p className={'solution-subtitle'}> Invest in 5 solar panels for up to <b style={{fontSize: '2vw'}}> {Math.ceil(totalCarbon / 8.2192)} days </b> </p>
                </div>
              </a>
            </div>
          </>
          :
          null
      }
    </>
  )
}

export default FlightEmissions;
