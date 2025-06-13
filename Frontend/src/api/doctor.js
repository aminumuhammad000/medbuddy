import axios from './axios';

export const getDoctorById = (id) => axios.get(`/doctors/${id}`);
export const createDoctor = (data) => axios.post('/doctors', data);
export const updateDoctor = (id, data) => axios.put(`/doctors/${id}`, data);