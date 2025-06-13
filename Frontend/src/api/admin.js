import axios from './axios';

export const getAdmins = () => axios.get('/admins');
export const getAdminById = (id) => axios.get(`/admins/${id}`);
export const createAdmin = (data) => axios.post('/admins', data);
export const updateAdminActivity = (id, data) => axios.patch(`/admins/${id}/activity`, data);
export const deleteAdmin = (id) => axios.delete(`/admins/${id}`);