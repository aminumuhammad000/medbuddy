import axios from './axios';

export const getPassbookByPatient = (patientId) => axios.get(`/passbook/patient/${patientId}`);
export const createPassbookEntry = (data) => axios.post('/passbook', data);
export const updatePassbookEntry = (id, data) => axios.put(`/passbook/${id}`, data);
export const deletePassbookEntry = (id) => axios.delete(`/passbook/${id}`);