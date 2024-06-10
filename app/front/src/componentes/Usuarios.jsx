import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';


function Usuarios() {

  const [usuarios, setUsuarios] = useState([]);
  
  const navigate = useNavigate();
  const URL_GET_USERS = import.meta.env.VITE_URL_GET_USERS;
  const URL_POST_DELETE = import.meta.env.VITE_URL_BACK_POST_DELETE;
  
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

  const deleteUser = async (userId) => {
    
    /* 
    Funciona con modal nativo del navegador

    console.log(userId);

    const confirmar = window.confirm('¿Estás seguro de ELIMINAR el usuario?');

    if(!confirmar){
      return;
    }else{
      alert('Usuario eliminado');
    } */


      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async (result) => {
        if (result.isConfirmed) {

          const eliminar = await axios.delete(`${URL_POST_DELETE}/${userId}`);
          console.log(eliminar);

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          
          await getUsers();

        }
      });

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
        <thead className='text-center'>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Password</th>
            <th colSpan={2}>Tarea</th>
          </tr>
        </thead>
        <tbody>
            { usuarios.map((user)=>(
            <tr key={ user._id }>
              <td>{ user._id }</td>
              <td>{ user.nombre }</td>
              <td>{ user.email }</td>
              <td>{ user.password }</td>
              <td>
                <Button variant="danger" onClick={()=>deleteUser(user._id)}>Delete User</Button>
              </td>
              <td>
                <Button variant="warning" onClick={()=>deleteUser(user)}>Update User</Button>
              </td>
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