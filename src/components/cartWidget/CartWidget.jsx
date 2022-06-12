import { BsCartCheck } from "react-icons/bs";
import { Link, NavLink } from 'react-router-dom';

function CartWidget() {
    return (
        <NavLink to='/cart' className="nav-link navHover txtColorCarrito carrito"> <BsCartCheck/><span id="cantidadEnCarrito" className="badge rounded-pill bg-danger notificacion">0</span></NavLink>                            
    );
}  
export default CartWidget;