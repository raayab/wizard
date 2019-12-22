import axios from 'axios';

export const fetchOrigins =async ()=> {
    let response = await axios.get(`https://my-json-server.typicode.com/galits/testNgsoft/origins`);
    let data = await response.data;
    return data;
};

