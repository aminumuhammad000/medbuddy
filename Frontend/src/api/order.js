import axios from './axios';

export const getOrders = () => axios.get('/orders');
export const getOrderById = (id) => axios.get(`/orders/${id}`);
export const createOrder = (data) => axios.post('/orders', data);
export const updateOrder = (id, data) => axios.put(`/orders/${id}`, data);
export const updateOrderStatus = (id, data) => axios.patch(`/orders/${id}/status`, data);
export const deleteOrder = (id) => axios.delete(`/orders/${id}`);