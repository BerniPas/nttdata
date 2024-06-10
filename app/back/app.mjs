

import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { middleware } from './middleware/data.mjs';
import hbs from 'hbs';
import cors from 'cors';
import rutasUsuarios from './routers/userRouter.mjs';
import morgan from 'morgan';
import session from 'express-session';
import MongoStore from 'connect-mongo';
const app = express();
const URL_MONGO = process.env.PASS_MONGODB;

app.set('view engine', 'hbs');
app.set('views', './views');
hbs.registerPartials('./views/partials');

app.use(middleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.use(cors());
app.use(morgan('dev'));

app.use(session({
    secret: 'keyboard cat',
    saveUninitialized: false, // don't create session until something stored
    resave: true, // save session if unmodified
    store: MongoStore.create({
        mongoUrl: URL_MONGO,
    }),
    cookie: {
        maxAge: 3600        
    }
}));

app.use('/user', rutasUsuarios);

export default app;

