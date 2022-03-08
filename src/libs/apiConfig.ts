import axios from "axios";

export const client = axios.create({
  baseURL: "http://127.0.0.1:3001",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});
