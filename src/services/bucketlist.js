import axios from "axios";

let baseUrl = "http://localhost:3001";

const getAll = () => {
    return axios
        .get( baseUrl + "/bucketlist")
        .then(response => response.data);
};

const create = bucketItem => {
    return axios
        .post( baseUrl + "/bucketlist", bucketItem)
        .then(response => response.data);
};

const update = (bucketItem, personId) => {
    return axios
        .put( baseUrl + `/bucketlist"${personId}`, bucketItem)
        .then(response => response.data);
};

const destroy = personId => {
    return axios.delete( baseUrl + `/bucketlist"/${personId}`);
};

export default { getAll, create, update, destroy };
