import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api/user";
axios.defaults.headers.post["Content-Type"] = "application/json";
