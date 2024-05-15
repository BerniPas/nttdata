import app from "./server.mjs";
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 9000;

//conectar a la database


//levantar el server
app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`);
});


