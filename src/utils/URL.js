// let BASE_URL = process.env.REACT_APP_BASE_URL;
let BASE_URL = "https://wephco-api.azurewebsites.net/api";

let endpoints = {
  Auth: {
    getAllUsers: BASE_URL + "/users",
    getUserById: BASE_URL + "/users/",
    login: BASE_URL + "/users/login",
    register: BASE_URL + "/users/register",
  },
  Requests: {},
  RealEstateRequests: {
    getAllRequests: BASE_URL + "/real-estate",
    postNewRequest: BASE_URL + "/real-estate/new-request",
  },
  References: {
    postNewReference: BASE_URL + "/reference",
  },
};

module.exports = { endpoints, BASE_URL };
