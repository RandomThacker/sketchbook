const { io } = require("socket.io-client");
const URL = process.env.NODE_ENV === 'production' ? "https://randomthacker-sketchbook-server.onrender.com" : "http://localhost:5000/"
export const socket = io(URL);