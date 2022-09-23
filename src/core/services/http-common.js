import axios from "axios";

export default axios.create({
  baseURL: `https://erentcarbackend.herokuapp.com/api/v1`,
  headers: {
    'accept': 'application/json'
  },
})