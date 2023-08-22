import axios from 'axios';

export const signup = (form_data) => axios.post('http://localhost:5000/signup', form_data);
export const signin = (form_data) => axios.post('http://localhost:5000/signin', form_data);