import { BsCartCheck } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";

function CartWidget() {
    const {productCount} = useCartContext()
    return (
        <>
            { (productCount() > 0) ?
            
                <Link to='/cart' className="nav-link navHover txtColorCarrito carrito"> <BsCartCheck/><span id="cantidadEnCarrito" className="badge rounded-pill bg-danger notificacion">{ productCount() }</span></Link>                            
                :
                <Link to='/cart' className="nav-link navHover txtColorCarrito carrito"> <BsCartCheck/></Link>                            

            }

        </>
    );
}  
export default CartWidget;