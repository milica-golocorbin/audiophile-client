import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

export const fetchAPI = {
  getAll: function (route: string) {
    return axiosInstance.request({
      method: "GET",
      url: route,
    });
  },
  getById: function (route: string, id: number) {
    return axiosInstance.request({
      method: "GET",
      url: `${route}/${id}`,
    });
  },
  create: function (route: string, payload: any) {
    return axiosInstance.request({
      method: "POST",
      url: route,
      data: payload,
    });
  },
  update: function (route: string, id: number, payload: any) {
    return axiosInstance.request({
      method: "PUT",
      url: `${route}/${id}`,
      data: payload,
    });
  },
};
