import axios, { type AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}

const API_KEY = import.meta.env.VITE_API_KEY;

if (!API_KEY) {
    throw new Error("VITE_API_KEY is not defined in your .env file");
}

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: API_KEY,
    },
});

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then((res) => res.data);
    };

    get = (id: number | string) => {
        return axiosInstance.get<T>(this.endpoint + "/" + id).then((res) => res.data);
    };
}

export default APIClient;
