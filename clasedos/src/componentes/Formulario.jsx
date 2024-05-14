import Form from 'react-bootstrap/Form';
import { useState } from 'react';


function Formulario() {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const imprimirDatos = () =>{

        console.log(`Datos ingresados en el formulario. ${nombre} - ${email} - ${password}`)

        //Mostrar datos al user
        alert(`Datos ingresados en el formulario: ${nombre} - ${email} - ${password}`);

        limpiarDatos();

    }

    function limpiarDatos() {
        setNombre('');
        setEmail('');
        setPassword('');
    }


    return ( 
        <>
        <h1 className="text-center mt-5 mb-5">
            Form de Carga de Usuarios
        </h1>

        <div className="container">
            <Form className='w-75'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre: </Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="name"
                        value={nombre}
                        onChange={(e)=> setNombre(e.target.value)} 
                        />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="name@example.com" 
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="name@example.com" 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}/>
                </Form.Group>
                <div className="mb-3 text-center">
                        <button onClick={ imprimirDatos } type="button" className="btn btn-success w-50">Cargar Usuarios</button>
                    </div>
                    <div className="mb-3 text-center">
                        <button onClick={ limpiarDatos } className="btn btn-danger w-75">Reset</button>
                    </div>
            </Form>
        </div>

    </>
    );
}

export default Formulario;