import axios from 'axios';

export const getDummy = () =>
  axios
    //.get(`${process.env.HTTPBIN_API_ENDPOINT}/json`)
    .get(`https://httpbin.org/json`)
    .then(response => response.data)