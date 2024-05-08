
import React from 'react';
import './css/App.css';
import Navegacion from './componentes/Navegacion/Navegacion';
import Footer from './componentes/Footer/Footer';
import messi from './assets/lionel-messi-inter-miami.jpg_874673648.webp'

const saludo = 'Hola Gente';



//Componente funcional: con una función 
export function App() {
  //return React.createElement('h1', { className: 'App' }, 'Hola Gente');

return (

    <React.Fragment>
      {/* Podemos usar uno de los dos métodos del fracment */}

      <>

        <Navegacion />

        <h1 className='text-center'>Hola Gente</h1>
        <img  src={messi} />

        <Footer />

      </>

    </React.Fragment>
  ); 

}

//Podemos exportar funciones o variables independiente al componente
export const sumar = (a, b) => {
  return a + b;
}

//export default App;
