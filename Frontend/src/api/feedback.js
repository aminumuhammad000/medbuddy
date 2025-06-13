import axios from './axios';

export const getFeedbacks = () => axios.get('/feedback');
export const getFeedbackById = (id) => axios.get(`/feedback/${id}`);
export const createFeedback = (data) => axios.post('/feedback', data);
export const updateFeedback = (id, data) => axios.put(`/feedback/${id}`, data);
export const deleteFeedback = (id) => axios.delete(`/feedback/${id}`);