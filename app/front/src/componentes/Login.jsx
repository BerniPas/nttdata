import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const URL_BACK = import.meta.env.VITE_URL_BACK_POST_LOGIN;
    
    function limpiarDatos() {
        setEmail('');
        setPassword('');
    }
    
    const loginUsuario = async (e) => { 

        e.preventDefault();

            await axios.post(URL_BACK, { email, password })
            .then((res) => {
                console.log(res.data);
            })

        limpiarDatos();
        
        navigate('/admin');

    }

    return ( 
        <>
        <h1 className="text-center mt-5 mb-5">
            Login de Usuarios
        </h1>

        <div className="container">
            <Form className='w-75' onSubmit={loginUsuario}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="name@example.com" 
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Mínimo 6 caracteres" 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}/>
                </Form.Group>
                <div className="mb-3 text-center">
                        <button type="submit" className="btn btn-success w-50">Login</button>
                    </div>
                    <div className="mb-3 text-center">
                        <button onClick={ limpiarDatos } className="btn btn-warning w-75">Reset</button>
                    </div>
            </Form>
        </div>

    </>
    );
}

export default Login;