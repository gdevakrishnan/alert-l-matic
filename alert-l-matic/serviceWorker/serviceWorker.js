import axios from 'axios';

const BASE_URL = 'http://localhost:5000/alert-l-matic/api';

export const chat = async (chatDetails) => {
    try {
        const task = await axios.post(`${BASE_URL}/chat`, chatDetails);
        const {data} = task.data;
        const {status} = task;
        const response = {data, status};
        return response;
    } catch (error) {
        console.error('Error during the request:', error);
        throw error;
    }
};
