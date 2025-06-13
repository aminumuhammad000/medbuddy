import axios from './axios';

export const getDrugs = () => axios.get('/drugs');
export const getDrugById = (id) => axios.get(`/drugs/${id}`);
export const createDrug = (data) => axios.post('/drugs', data);
export const updateDrug = (id, data) => axios.put(`/drugs/${id}`, data);
export const deleteDrug = (id) => axios.delete(`/drugs/${id}`);