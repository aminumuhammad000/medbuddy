import axios from './axios';

export const getUsers = () => axios.get('/users');
export const getUserById = (id) => axios.get(`/users/${id}`);
export const createUser = (data) => axios.post('/users', data);
export const updateUser = (id, data) => axios.put(`/users/${id}`, data);
export const deleteUser = (id) => axios.delete(`/users/${id}`);
export const verifyUser = (id) => axios.patch(`/users/${id}/verify`);