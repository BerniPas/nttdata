import { request, response} from 'express';
import User from '../database/userModel.mjs';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';

const getUsers = async (req = request, res =response) => {

    const usuarios = await User.find({});

    res.json({
        user: usuarios
    });

   /*  res.redirect('/user/form'); */

}

const createUser = async (req = request, res = response) => {

    const { nombre, email, password } = req.body;

    const errores = await validationResult(req);

    if(!errores.isEmpty()){

        console.log(errores.array())

        return res.json({
            errores: errores.array()
        });

    }

    const user = {
        nombre: nombre,
        email: email,
        password:  password   
    }

    const userExist = await User.findOne({email: email});

    if(userExist){
        return res.status(404).json({
            error: "Usuario ya existe"
        });
    }

    
    try {
        
        //creamos una sal para la encriptación
        const salt = await bycrpt.genSalt(10);
        console.log(salt);
    
        //encriptamos la contraseña
        user.password = await bcrypt.hash(user.password, salt);  

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

const loginUser = async (req = request, res = response) => {

    const { email, password } = req.body;

    //función para validar datos del user
    const errores = await validationResult(req);

    if(!errores.isEmpty()){

        console.log(errores.array())

        return res.json({
            errores: errores.array()
        });

    }

    //validar al user
    const varlidarUsuario = async (user) => {

        
        
        try {

            const userExist = await User.findOne({email: email});

            console.log(userExist);

            if(!userExist){
                return { 
                    ok: false,
                    data: 'Usuario no encontrado'
                }
            }

            const match = await bcrypt.compare(user.password, userExist.password); 

            console.log(match);

            if(!match){
                return { 
                    ok: false,
                    data: 'Email o Password incorrectos'
                }
            }
            
            return { 
                ok: true, 
                data: 'Usuario autenticado'
            }

        } catch (error) {
            console.log(error);
            return { 
                ok: false,
                data: 'Error en la autenticación'
            }
        }

    }


    
    const tokenUser = async () =>{
        
        const { email, password } = req.body;
        
        
        try {
            
            const validar = await varlidarUsuario({email, password});
            
            if(validar.ok){
    
                const user = await User.findOne({email: email});
                //const user = await validar.userExist;
    
                const payload = {
                    user: {
                        id: user.id, 
                        nombre: user.nombre
                }
                }
    
                const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 });
    
                return res.status('200').json({
                    token: token
                });
                
            }
            
            
        } catch (error) {
            console.log(error);
            res.json({
                error: 'Error en el sistema'
            });
        }       
        
        //guardar la session en ma database
        
    }
    
    tokenUser();

}



export {
    getUsers,
    getForm,
    createUser,
    updateUser,
    deleteUser,
    loginUser
}

