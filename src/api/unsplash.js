import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4c6bb7a79512beefdb2c53f2f1d14a305fa253b5adb231d5fc819ab1fbe4fdaa'
    }
});