import { useCartContext } from "../../context/CartContext"
import { redondeo } from "../../helper/productos"
import ItemCart from "../itemCart/ItemCart"
import { Link } from 'react-router-dom';

const Cart = () => {
  const {cart, precioTotal, cantidadProductos, emptyCart} = useCartContext()

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
            <div className='d-flex flex-column justify-content-center align-self-end'>
              <div className="totalCarrito">
                  <p>Total:</p>
                  <h2 className='h1'>{redondeo(precioTotal())}</h2> 
              </div>
              <div>
                  <button id= "iniciarCompraBtn" className="botonPersonalizado botonPersonalizadoCompra mt-2" onClick={emptyCart} >Vaciar carrito</button>
              </div>
            </div>
            </div>
        </div>
        :
        <div className="d-flex flex-column justify-content-center">
          <div className="seccion_datos w-75 align-self-center">
            <Link to='/'>
              <img src="https://www.valeorx.com/static/media/empty-cart.60e68bfd.png" alt="emptyCart" />
            </Link>
          </div>
        </div>

      }

    </main>

  )
}


export default Cart