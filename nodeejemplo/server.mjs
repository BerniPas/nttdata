

import express from 'express'; //ES6= ES Modules
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;


app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`);
});


