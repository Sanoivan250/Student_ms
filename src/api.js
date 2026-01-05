import axios from 'axios';

const API=axios.create({
    baseURL: 'https://student-ms-chi.vercel.app/students',
    
});
export default API;