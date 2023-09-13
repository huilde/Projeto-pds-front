import axios from "axios";

export const ApiService = () => {
  const api = axios.create({
    baseURL: import.meta.env.VITE_PROJECT_PDS_API_URL,
  });

  api.interceptors.request.use((config) => {
    config.headers["x-access-token"] =
      window.localStorage.getItem("x-access-token") || "";

    return config;
  });

  return api;
};
