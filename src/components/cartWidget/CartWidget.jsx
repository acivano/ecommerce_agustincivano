import { BsCartCheck } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";

function CartWidget() {
    const {cantidadProductos} = useCartContext()
    return (
        <>
            { (cantidadProductos() > 0) ?
            
                <Link to='/cart' className="nav-link navHover txtColorCarrito carrito"> <BsCartCheck/><span id="cantidadEnCarrito" className="badge rounded-pill bg-danger notificacion">{ cantidadProductos() }</span></Link>                            
                :
                <Link to='/cart' className="nav-link navHover txtColorCarrito carrito"> <BsCartCheck/></Link>                            

            }

        </>
    );
}  
export default CartWidget;