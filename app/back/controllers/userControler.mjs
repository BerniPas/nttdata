import { request, response} from 'express';
import User from '../database/userModel.mjs';

const responderUser = (req = request, res =response) => {
    res.json({
        user: 'User'
    });
}

const createUser = async (req = request, res = response) => {

    const { nombre, email, password } = req.body;

    console.log(req.body);

    const user = {
        nombre: nombre,
        email: email,
        password:  password   
    }

    console.log(user);

    const newUser = new User(user);

    await newUser.save();

    res.json({
        user: "Usuario Creado"
    });


}

const getForm = (req = request, res = response) => {
    res.render('formulario');
    
}
const updateUser = (req = request, res = response) => {
    res.json({
        user: 'User'    
    });
}
const deleteUser = (req = request, res = response) => {
    res.json({
        user: 'User'    
    });
}



export {
    getForm,
    createUser,
    updateUser,
    deleteUser
}

