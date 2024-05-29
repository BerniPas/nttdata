import { request, response} from 'express';
import User from '../database/userModel.mjs';
import bycrpt from 'bcrypt';

const getUsers = (req = request, res =response) => {

    const usuarios = User.find({});

    res.json({
        user: usuarios
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

    const userExist = User.findOne({email: email});

    if(userExist){
        return res.json({
            error: "Usuario ya existe"
        });
    }

    
    try {
        
        //creamos una sal para la encriptación
        const salt = await bycrpt.genSalt(10);
        console.log(salt);
    
        //encriptamos la contraseña
        user.password = await bycrpt.hash(user.password, salt);  
        
        console.log(user.password);

        const newUser = new User(user);
        
        await newUser.save();

        return res.json({
            user: "Usuario Creado"
        });

    } catch (error) {
        console.log(error);
        return res.json({
            error: "Error en el sitema"
        });
    }
    
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
    getUsers,
    getForm,
    createUser,
    updateUser,
    deleteUser
}

