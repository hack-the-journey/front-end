import axios from "axios";

let baseUrl = "http://localhost:3002/getInspirations";

const getAll = () => {
    return axios.get(baseUrl).then(response => response.data);
};


export default { getAll };
