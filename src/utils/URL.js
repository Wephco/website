// let BASE_URL = process.env.REACT_APP_BASE_URL;
// let BASE_URL = "https://wephco-api.azurewebsites.net/api";
let BASE_URL = "https://wephco-staging-api.herokuapp.com/api";

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
  Contact: {
    mainURL: BASE_URL + "/contact",
  },
};

module.exports = { endpoints, BASE_URL };
