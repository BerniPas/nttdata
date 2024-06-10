import { Router } from 'express';
import { check } from 'express-validator';

import{
    getUsers,
    getForm,
    createUser,
    updateUser,
    deleteUser,
    loginUser
} from '../controllers/userControler.mjs'

const router = Router();

/* 
    responder a la ruta user
 */

router.get('/all', getUsers);

router.get('/form', getForm);

router.post('/', [
    check('nombre', 'El nombre es obligatorio').isString().isLength({min: 3}),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').isLength({min: 6}),
], createUser);

router.post('/login', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').isLength({min: 6}),
], loginUser);

router.put('/update/:userId', [
    check('nombre', 'El nombre es obligatorio').isString().isLength({min: 3}),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').isLength({min: 6}),
] , updateUser);


router.delete('/delete/:userId', deleteUser);


export default router;