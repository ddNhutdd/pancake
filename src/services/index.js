import axios from "axios";
import { ACCESS_TOKEN } from "src/constants";
import { getLocalStorage } from "src/utils";

const BASE_URL = '';
const timeout = 180_000;

export const axiosWithoutAuth = axios.create({
    baseURL: BASE_URL,
    timeout: timeout
})

export const axiosWithAuth = axios.create({
    baseURL: BASE_URL,
    timeout: timeout,
})

axiosWithAuth.interceptors.request.use((config) => {
    config.headers["Authorization"] = `Bearer ${getLocalStorage(ACCESS_TOKEN)}`;
    return config;
}, (e) => {
    return Promise.reject(e);
});