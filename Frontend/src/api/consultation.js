import axios from './axios';

export const getConsultations = () => axios.get('/consultations');
export const getConsultationById = (id) => axios.get(`/consultations/${id}`);
export const createConsultation = (data) => axios.post('/consultations', data);
export const updateConsultation = (id, data) => axios.put(`/consultations/${id}`, data);
export const deleteConsultation = (id) => axios.delete(`/consultations/${id}`);
export const updateConsultationStatus = (id, data) => axios.patch(`/consultations/${id}/status`, data);