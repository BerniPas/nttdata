
//const expres = require('express'); //ES5= commonjs



//Módulos notivos de Node.js
import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    res.statusCode = 200;

    if(path === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Hello World</h1>');
    }

/*     switch (path) {
        case '/':
            
            break;
    
        default:
            break;
    } */

    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

