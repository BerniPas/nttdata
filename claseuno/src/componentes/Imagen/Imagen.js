import messi from './messi.jpg'
import './imagen.css'



const Imagen = () => {
    return (
        <div className="text-center miImagen">
            <h2>Imagen de Messi</h2>
            <img src={messi} alt="Messi" style={{width: '100%'}} />
        </div>
    )
}

export default Imagen;