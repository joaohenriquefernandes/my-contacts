import express from 'express';
import 'express-async-errors';
import { cors } from './app/middlewares/cors.js';
import { errorHandler } from './app/middlewares/errorHandler.js';
import { router } from './routes.js';

const app = express();
app.use(express.json());
app.use(cors);
app.use(router);
app.use(errorHandler);

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
