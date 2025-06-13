import axios from './axios';

export const getChats = () => axios.get('/chat');
export const sendMessage = (data) => axios.post('/chat', data);