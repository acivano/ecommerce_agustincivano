import { useCartContext } from "../../context/CartContext"
import carritoVacio from '../../images/carritoVacio.png'
import { redondeo } from "../../helper/productos"
import ItemCart from "../itemCart/ItemCart"
import { Link } from 'react-router-dom';
import { ModalForm } from "../modalForm/ModalForm";
import { useModalFormContext } from "../../context/ModalFormContext";


const Cart = () => {
  const {cart, precioTotal, cantidadProductos, emptyCart} = useCartContext()
  const { activarModal } = useModalFormContext()

  function confirmarCompra(e) {
    e.preventDefault()
    activarModal()
  }

  return (
    <main>
      { cantidadProductos() > 0 ?
        
        <div className="d-flex flex-column justify-content-center">
          <div className="seccion_datos w-75 align-self-center">
            <div className="container d-flex flex-column justify-content-between mt-3">
                {  
                  cart.map(item =>
                      <ItemCart key={item.id} item={item}/>
                  )}
            </div>
          </div>
          <div className='d-flex flex-column justify-content-center w-75 align-self-center'>
            <div className='d-flex flex-column justify-content-center align-self-end w-50'>
              <div className="d-flex flex-column justify-content-center align-self-center">
                  <p>Total:</p>
                  <h2 className='h1'>{redondeo(precioTotal())}</h2> 
              </div>
              <div className="w-100">
                <div className="d-flex flex-row justify-content-evenly align-self-end">
                    <button className="botonPersonalizado botonPersonalizadoCompra mt-2" onClick={emptyCart} >Vaciar carrito</button>
                    <button className="botonPersonalizado botonPersonalizadoCompra mt-2" onClick={confirmarCompra} >Confirmar Compra</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        :
        <div className="d-flex flex-column justify-content-center">
          <div className="seccion_datos w-75 align-self-center">
            <Link to='/'>
              <img src={carritoVacio} alt="Carrito Vacio" className='w-90' />
            </Link>
          </div>
        </div>
      }
      <ModalForm/>
    </main>
  )
}


export default Cart