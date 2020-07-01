import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://pipoquinhafilmes.herokuapp.com/'
});
