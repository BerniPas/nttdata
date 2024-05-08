
import '../css/navegacion.css'
import Busqueda from './Busqueda'
import { Component } from 'react';


class Navegacion extends Component{

    render(){

        return (
            <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary miClase">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="https://sceu.frba.utn.edu.ar/" target='_blank' rel="noreferrer">UTN</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a href="" class="nav-link active" aria-current="page">
                                        Home
                                    </a>
                                </li>
                            </ul>
                            
                            <Busqueda />

                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navegacion;