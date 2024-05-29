import { Router } from 'express';

import{
    getForm,
    createUser,
    updateUser,
    deleteUser
} from '../controllers/userControler.mjs'

const router = Router();

/* 
    responder a la ruta user
 */

router.get('/form', getForm);
router.post('/', createUser);
router.put('/', updateUser);
router.delete('/', deleteUser);


export default router;