import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';


function Formulario() {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    useEffect(()=>{},[]);

    return ( 
        <>
        <h1 className="text-center mt-5 mb-5">
            Form de Carga de Usuarios
        </h1>


            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre: </Form.Label>
                    <Form.Control type="text" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="password" placeholder="name@example.com" />
                </Form.Group>
            </Form>



    </>
    );
}

export default Formulario;