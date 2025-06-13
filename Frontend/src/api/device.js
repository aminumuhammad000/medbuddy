import axios from './axios';

export const getDevices = () => axios.get('/devices');
export const getDeviceById = (id) => axios.get(`/devices/${id}`);
export const createDevice = (data) => axios.post('/devices', data);
export const updateDevice = (id, data) => axios.put(`/devices/${id}`, data);
export const deleteDevice = (id) => axios.delete(`/devices/${id}`);