import carritoVacio from '../../images/carritoVacio.png'
import { Link } from 'react-router-dom';



const CarritoVacio = () => {
  return (

        <div className="d-flex flex-column justify-content-center">
          <div className="seccion_datos w-75 align-self-center">
            <Link to='/'>
              <img src={carritoVacio} alt="Carrito Vacio" className='w-90' />
            </Link>
          </div>
        </div>

  )
}


export default CarritoVacio