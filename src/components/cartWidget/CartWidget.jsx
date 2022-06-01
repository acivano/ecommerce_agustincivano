import { BsCartCheck } from "react-icons/bs";

function CartWidget() {
    return (
        <a className="nav-link navHover txtColorCarrito carrito" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> <BsCartCheck/><span id="cantidadEnCarrito" className="badge rounded-pill bg-danger notificacion">0</span></a>                            
    );
}  
export default CartWidget;