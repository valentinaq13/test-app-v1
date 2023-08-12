import axios from "axios";

const API_URL = "https://api.punkapi.com/v2/";

class AppServices {
  get = async (url, params = {}) => {
    try {
      const response = await axios.get(API_URL + url, {
        headers: {
          "Content-Type": "application/json",
        },
        params,
      });
      return response;
    } catch (e) {
      return e.response;
    }
  };

  getPublic = async (url, params = {}) => {
    try {
      const response = await axios.get(API_URL + url, {
        headers: {
          "Content-Type": "application/json",
        },
        params,
      });
      return response;
    } catch (e) {
      return e;
    }
  };

  post = async (url, data, authorization = false, formData = false) => {
    try {
      const user = await JSON.parse(localStorage.getItem("user"));
      const response = await axios.post(API_URL + url, data, {
        headers: {
          "Content-Type": formData ? "multipart/form-data" : "application/json",
          Authorization: authorization ? "Token " + user?.token : "",
        },
      });
      return response;
    } catch (e) {
      return e;
    }
  };

  patch = async (url, data, authorization = false) => {
    try {
      const user = await JSON.parse(localStorage.getItem("user"));
      const response = await axios.patch(API_URL + url, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: authorization ? "Token " + user?.token : "",
        },
      });
      return response;
    } catch (e) {
      return e;
    }
  };

  put = async (url, data, authorization = false) => {
    try {
      const user = await JSON.parse(localStorage.getItem("user"));
      const response = await axios.put(API_URL + url, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: authorization ? "Token " + user?.token : "",
        },
      });
      return response;
    } catch (e) {
      return e;
    }
  };
}

const api = new AppServices();

export default api;
