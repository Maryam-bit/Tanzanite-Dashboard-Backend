import cors from "cors";
import express from "express";
import ('./route.js')
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(cors());
server.options("*", cors());


export default server;