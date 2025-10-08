import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 8000,
});

// Request interceptor: add token / log requests
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Example: attach a fake token
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.set("Authorization", `Bearer ${token}`);
    }
    console.log(`[REQ] ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// Response interceptor: handle errors globally
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    console.error("[RES ERROR]", error?.response?.status, error?.message);
    // Optionally handle 401/403, refresh token, etc.
    return Promise.reject(error);
  }
);

export default api;
