import axios from 'axios';

const url = 'http://localhost:3000/customer'

export function registering(payload) {
  console.log(payload)
  return axios({
    method: 'POST',
    url: `${url}/register`,
    data: payload
  })
}