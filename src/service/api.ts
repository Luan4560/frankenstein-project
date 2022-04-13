import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://excuser.herokuapp.com/v1/excuse/'
})