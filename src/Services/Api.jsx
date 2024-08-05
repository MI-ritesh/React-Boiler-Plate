import { CommonRequest } from './CommonRequest';
import { API_BASE_URL } from './ApiUrl';

export const fetchSomeData = () => {
    return CommonRequest('GET', `${API_BASE_URL}/products`);
};