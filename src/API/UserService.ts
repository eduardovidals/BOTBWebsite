import {FlightType} from "../Common/Types";
import axios from "axios";

export const userFlightCommissions = async (flights: FlightType[]) => {
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

// POST GET DELETE
export const createUserPOST = async (name, email, department) => {
  return await axios.post('http://localhost:8082/api/users',
    {
      name: name,
      email: email,
      department: department
    }
  ).then(res => {
    return res;
  }).catch(e => {
      console.log(JSON.stringify(e, null, 2));
    }
  )
}

export const getUserGET = async (id) => {
  return await axios.get('http://localhost:8082/api/users/' + id)
    .then(res => {
      return res;
  }).catch(e => {
    console.log(JSON.stringify(e, null, 2));
    })
}

export const deleteUserDELETE = async (id) => {
  return await axios.delete('http://localhost:8082/api/users/' + id)
    .then(res => {
      return res;
    }).catch(e => {
      console.log(JSON.stringify(e, null, 2));
    })
}



