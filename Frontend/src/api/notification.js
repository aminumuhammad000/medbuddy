import axios from './axios';

export const getNotifications = () => axios.get('/notifications');
export const getNotificationById = (id) => axios.get(`/notifications/${id}`);
export const createNotification = (data) => axios.post('/notifications', data);
export const updateNotification = (id, data) => axios.put(`/notifications/${id}`, data);
export const deleteNotification = (id) => axios.delete(`/notifications/${id}`);