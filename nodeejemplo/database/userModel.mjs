import mongoose from "mongoose";
import { Schema } from "mongoose";

//esta es la estructura de un documento en la colección de usuarios
//máximo es de 16 megas
const usuarioSchema = new Schema({
    nombre:{
        type: String, 
        required: true 
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: new Date()
    }
});

export default mongoose.model('User', usuarioSchema);