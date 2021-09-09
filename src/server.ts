import express from 'express';
import app from './app';
const PORT = process.env.PORT || 3333;

const server = express();

server.use(app);

server.listen(PORT, () => console.log(`Listening on ${PORT}`));