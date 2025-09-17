import express, { type NextFunction, type Request, type Response } from 'express';
import 'express-async-errors';
import { router } from './routes.js';

const app = express();
app.use(express.json());
app.use(router);
app.use((error: unknown, request: Request, response: Response, next: NextFunction) => {
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
