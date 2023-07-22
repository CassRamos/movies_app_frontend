import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "ngrok-skip-browser-warning": "true",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, X-Requested-With",
  },
});
