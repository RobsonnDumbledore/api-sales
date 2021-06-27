import '../typeorm';
import cors from 'cors';
import { errors } from 'celebrate';
import express from 'express';
import 'express-async-errors';
import routes from '../routes';
import { handleError } from '@shared/middlewares/HandleError';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors())
app.use(handleError);

app.listen(3333, () => console.log('server started on port 3333 🏆'));
