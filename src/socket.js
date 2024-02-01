const { io } = require("socket.io-client");
export const socket = io("http://localhost:5000/");