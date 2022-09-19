import axios from "axios";

export default axios.create({
  baseURL: "https://app-erant.herokuapp.com",
  headers: {
    "Content-type": "application/json"
  },
})