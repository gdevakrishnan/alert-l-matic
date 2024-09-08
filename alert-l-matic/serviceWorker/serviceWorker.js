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

export const createUserDetails = async (userDetails) => {
    const task = await axios.post(`${BASE_URL}/user/register`, userDetails);
    const response = task.data;
    return response;
}

export const getUserDetails = async (userDetails) => {
    const task = await axios.post(`${BASE_URL}/user/login`, userDetails);
    const response = task.data;   
    return response;
}

export const userVerify = async (userDetails) => {
    const task = await axios.post(`${BASE_URL}/user/user_verify`, userDetails);
    const response = task.data;
    return response;
}