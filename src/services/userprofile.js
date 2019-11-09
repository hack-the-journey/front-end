import axios from "axios";

let baseUrl = "http://localhost:3001/userprofile/";

const getAll = () => {
    return axios.get(baseUrl).then(response => response.data);
};

const createDateRange = dateRange => {
    return axios.post(baseUrl, dateRange).then(response => response.data);
};

const destroyDateRange = id => {
    return axios.delete(baseUrl = + id);
};

export default { getAll, createDateRange, destroyDateRange };
