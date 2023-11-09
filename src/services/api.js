import axios from "axios";
import React from "react";


// 01310930/json/

const api = axios.create({
baseURL: "https://viacep.com.br/ws"
});

export default api;