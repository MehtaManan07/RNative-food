import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 9JhvL9m2x3xo4G_SR0fc0iGjSBU088HPzocvwiljzSZ3plOlNq0LbjQBJsBFTbPji1Ebp-us3YZnuVGWhMRUIyD46uHdSf_ijB2EEO2coGQ8dM4yyKZfuk7OepCvX3Yx',
  },
});
