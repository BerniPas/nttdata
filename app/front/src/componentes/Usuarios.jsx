import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";



function Usuarios() {

  const [usuarios, setUsuarios] = useState([]);
  
  const navigate = useNavigate();
  const URL_GET_USERS = import.meta.env.VITE_URL_GET_USERS;
  
  const getUsers = async () => {
    /* const respuesta = await axios.get(URL_GET_USERS)
    console.log(respuesta);
    console.log('======================');
    console.log(respuesta.data);
    console.log('======================'); */
    
    try {
      const { data } = await axios.get(URL_GET_USERS)
      console.log(data);
      setUsuarios(data.user);
      
    } catch (error) {
      console.log(error);
    }
    
  }

  const redireccion = () =>{
    navigate("/formulario");
  }
  
  
  useEffect(() => {
    getUsers();
  },[]);

  return (
    <>
      <h1 className="text-center mt-5 mb-5">
        Tabla de Usuarios
      </h1>

      <Table striped bordered hover className="container">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
            { usuarios.map((user)=>(
            <tr key={ user._id }>
              <td>{ user._id }</td>
              <td>{ user.nombre }</td>
              <td>{ user.email }</td>
              <td>{ user.password }</td>
            </tr>
            ))
            }
        </tbody>
      </Table>

      <div className='text-center mt-5'>
        <Button variant="success w-50" onClick={redireccion}>Cargar Users</Button>
      </div>

      <div className='text-center mt-5'>
        <Link to='/formulario'>
          <Button variant="primary w-50">Cargar Users</Button>
        </Link>
      </div>

    </>
  );
}

export default Usuarios;