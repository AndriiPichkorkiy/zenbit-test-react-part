import axios from 'axios';

export const instance = axios.create({
    baseURL:'http://localhost:8080/messages'
})

export const sendMsg = async (data) => {
    console.log('data', data)
    const result = await instance.post('/', data);
    console.log('result', result);
    return result.data;
}