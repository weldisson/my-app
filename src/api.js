import axios from 'axios';

const api = axios.create({
  baseURL: 'https://run.mocky.io',
});

export const getProducts = () => {
  return api.get('/v3/64d65e31-f949-449c-bdb4-de6665265a69')
};
