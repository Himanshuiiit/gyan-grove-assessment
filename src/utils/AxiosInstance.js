import axios from "axios";

const AxiosInstance = axios.create({
  baseURL:
    "https://gg-backend-assignment.azurewebsites.net/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosInstance;
