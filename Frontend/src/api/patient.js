import axios from './axios';

export const getPatientById = (id) => axios.get(`/patients/${id}`);
export const createPatient = (data) => axios.post('/patients', data);
export const updatePatient = (id, data) => axios.put(`/patients/${id}`, data);