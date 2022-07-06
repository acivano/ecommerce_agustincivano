import { useCartContext } from "../../context/CartContext"
import { redondeo } from "../../helper/productos"
import { useModalFormContext } from "../../context/ModalFormContext";


const CarritoTotal = () => {
  const {precioTotal, emptyCart} = useCartContext()
  const { activarModal } = useModalFormContext()

  function confirmarCompra(e) {
    e.preventDefault()
    activarModal()
  }

  return (

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

  )
}


export default CarritoTotal