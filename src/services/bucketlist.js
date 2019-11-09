import axios from "axios";

let baseUrl = "http://localhost:3001/bucketlist/";

const getAll = () => {
  return axios.get(baseUrl).then(response => response.data);
};

const create = bucketItem => {
  return axios.post(baseUrl, bucketItem).then(response => response.data);
};

const update = (bucketItem, itemId) => {
  return axios
    .put(baseUrl + itemId, bucketItem)
    .then(response => response.data);
};

const destroy = itemId => {
  return axios.delete(baseUrl + itemId);
};

export default { getAll, create, update, destroy };
