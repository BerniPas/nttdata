import { useState, useEffect } from 'react';
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Usuarios() {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        axios.get('http://localhost:4000/usuarios')
    }, []);

    return (
        <>
            <h1 className="text-center mt-5 mb-5">
                Tabla de Usuarios 
            </h1>

            
      <div className='text-center mt-5 mb-5'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Vite + React</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nihil. Blanditiis illum nemo amet sunt eaque? Reiciendis consequatur architecto nam? Nostrum eum natus atque dolorum repellat reiciendis possimus soluta vero.
        Lorem ipsum dolor sit amet, consectetur <Link to='/formulario'>Formulario</Link>  elit. Ea repellendus eius maiores est dolorem sapiente ullam libero, ad optio tempora nisi repudiandae, porro vero amet consequuntur sunt molestias, repellat assumenda!
      </p>
      </div>
        </>
    );
}

export default Usuarios;