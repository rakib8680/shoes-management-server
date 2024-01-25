import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import router from './app/routes';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';

// middleware
app.use(express.json());
app.use(cors());

// application route
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});


app.use(globalErrorHandler);
app.use()

export default app;
