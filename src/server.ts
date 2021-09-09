import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import app from './app';
import cors from 'cors';

const PORT = process.env.PORT || 3333;
const server = express();

server.use(cors());
server.use(express.urlencoded({extended: false}));
server.use(express.json());

server.use(app);

server.listen(PORT, () => console.log(`Listening on ${PORT}`));