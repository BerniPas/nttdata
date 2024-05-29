

import express from 'express'; 
import dotenv from 'dotenv';
dotenv.config();
import { middleware } from './middleware/data.mjs';
import hbs from 'hbs';
import cors from 'cors';
import rutasUsuarios from './routers/userRouter.mjs';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 9000;

app.set('view engine', 'hbs');
app.set('views', './views');
hbs.registerPartials('./views/partials');

app.use(middleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.use(cors());
app.use(morgan('dev'));

app.use('/user', rutasUsuarios);

export default app;

