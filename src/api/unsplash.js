import axios from 'axios';

export default axios.create({
  headers: {
    Authorization: 'Client-ID 1ab3324d302f442c5257b57449505f0822002557205da038d353a303ca9e2632'
  },
  baseURL: 'https://api.unsplash.com'
}); 
