


//middleware: funciones previas a las rutas
const middleware = (req, res, next) => {

    //console.log(req);
    console.log(req.url);
    console.log(req.method);
    console.log(req.body);
    console.log('================================');
    console.log('Middleware');
    console.log('================================');

    next();
}





export { 
    middleware
};