import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { APP_API_URL } from "../config";

let headers = {
  // 'content-type': 'application/json'
};

const callApi = axios.create({
  baseURL: APP_API_URL,
  headers,
});

callApi.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

callApi.interceptors.response.use(
  (response) =>
    new Promise((resolve, reject) => {
      resolve(response);
    }),
  (error) => {
    return new Promise((resolve, reject) => {
      reject(error);
    });
  }
);

export default callApi;
