import axios from "axios"

export const onSignup = (data) => {
  console.log('data', data)
  return axios.post(`http://localhost:3001/signup`, data)
}