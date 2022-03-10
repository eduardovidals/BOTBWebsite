import {FlightType} from "../Common/Types";
import axios from "axios";

const token = 'RRES1ZVM0TMK33HM779FY8HW8BSD';

axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

export const userFlightCommissionsPOST = async (flights: FlightType[]) => {
  return await axios.post('https://beta3.api.climatiq.io/travel/flights',
    {
      legs: flights,
    }
  ).then(res => {
    return res;
  })
    .catch(e => {
      console.log(JSON.stringify(e, null, 2));
    })
}


