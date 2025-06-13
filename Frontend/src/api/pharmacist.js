import axios from './axios';

export const getPharmacistById = (id) => axios.get(`/pharmacists/${id}`);
export const createPharmacist = (data) => axios.post('/pharmacists', data);
export const updatePharmacist = (id, data) => axios.put(`/pharmacists/${id}`, data);