import axios from 'axios';

const api = axios.create({
  baseURL: 'https://quitandasaltense.herokuapp.com/',
});

export { api };
