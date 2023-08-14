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
}

const api = new AppServices();

export default api;
