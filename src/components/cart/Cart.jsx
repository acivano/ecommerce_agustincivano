import { useCartContext } from "../../context/CartContext"
import ItemCart from "../itemCart/ItemCart"
import EmptyCart from "./EmptyCart"
import TotalCart from "./TotalCart";
import { ModalForm } from "../modalForm/ModalForm";


const Cart = () => {
  const {cart, productCount} = useCartContext()
  return (
    <main>
      
      { productCount() > 0 ?
        
        <div className="d-flex flex-column justify-content-center">
          <div className="seccion_datos w-75 align-self-center">
            <div className="container d-flex flex-column justify-content-between mt-3">
                {  
                  cart.map(item =>
                      <ItemCart key={item.id} item={item}/>
                  )}
            </div>
          </div>
          <TotalCart/>
        </div>
        :
        <EmptyCart/>
      }
      <ModalForm/>
    </main>
  )
}


export default Cart