

import express from 'express'; //ES6= ES Modules
import dotenv from 'dotenv';
dotenv.config();
import { middleware } from './middleware/data.mjs';

const app = express();
const PORT = process.env.PORT || 9000;
/* 
//middleware: funciones previas a las rutas
const middleware = (req, res, next) => {

    console.log(req);
    console.log(req.url);
    console.log(req.method);
    console.log(req.body);
    console.log('================================');
    console.log('Middleware');
    console.log('================================');

    next();
} */

//usa el middleware
app.use(middleware);//global: todas las rutas
app.use(express.json());//middleware para parsear el body a json
app.use(express.urlencoded({ extended: true }));//middleware para parsear el body a json
app.use(express.static('public'));//middleware para servir archivos estáticos

app.get('/data', middleware, (req, res) => {

    //vemos los procesos que se están ejecutando de node
    //console.log(process);

    //imprimimos la variable de entorno PORT
    console.log(process.env.PORT);

    res.send('<h1>Hello World</h1>');
});


app.get('/json', (request, response) => {
    response.status('404').json({
        user: 'User'
    });
})

app.get('/descarga', (request, response) => {
    response.download('./public/index.html');
});


app.get('/html', (request, response) => {

    if (request.query.name) {
        return response.send(`<h1>Hello ${request.query.name}</h1>`);
    }else{
        return response.send('<h1>Hello World</h1>');
    }

});


app.get('*', (request, response) => {

    response.status(404).send('<h1>404 Not Found</h1>');

});

app.post('/data', (req, res) => {

    console.log(req.body);

    const user = req.body;

    /* const nombre = req.body.nombre;
    const email = req.body.email;
    const password = req.body.password; */ 

    const { nombre, email, password } = req.body;

    const persona = {
        userName: nombre,
        userEmail: email,
        userPassword: password
    };

    res.status('200').json({usuario: persona});
});





export default app;


