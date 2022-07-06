import { useCartContext } from "../../context/CartContext"
import ItemCart from "../itemCart/ItemCart"
import CarritoVacio from "./CarritoVacio"
import CarritoTotal from "./CarritoTotal";
import { ModalForm } from "../modalForm/ModalForm";


const Cart = () => {
  const {cart, cantidadProductos} = useCartContext()
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
          <CarritoTotal/>
        </div>
        :
        <CarritoVacio/>
      }
      <ModalForm/>
    </main>
  )
}


export default Cart