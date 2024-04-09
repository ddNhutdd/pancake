import axios from 'axios';

const BASE_URL = 'http://explorer.dk-technical.vn/';
const timeout = 180_000;

export const axiosWithoutAuth = axios.create({
	baseURL: BASE_URL,
	timeout: timeout,
});

export const axiosWithAuth = axios.create({
	baseURL: BASE_URL,
	timeout: timeout,
});

axiosWithAuth.interceptors.request.use(
	(config) => {
		config.headers['Authorization'] = `Bearer ${`fda`}`;
		return config;
	},
	(e) => {
		return Promise.reject(e);
	},
);
