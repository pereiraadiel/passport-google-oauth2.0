import express from 'express';
import homeRoutes from './routes/home.routes';
const app = express();

app.use(homeRoutes);

export default app;