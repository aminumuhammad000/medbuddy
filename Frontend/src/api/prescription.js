import axios from './axios';

export const getPrescriptions = () => axios.get('/prescriptions');
export const getPrescriptionById = (id) => axios.get(`/prescriptions/${id}`);
export const createPrescription = (data) => axios.post('/prescriptions', data);
export const updatePrescription = (id, data) => axios.put(`/prescriptions/${id}`, data);
export const deletePrescription = (id) => axios.delete(`/prescriptions/${id}`);