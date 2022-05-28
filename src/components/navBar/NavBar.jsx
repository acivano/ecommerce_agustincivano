import logoInicio from '../../images/logo.png'
import { BsCartCheck } from "react-icons/bs";

function NavBar() {
    const home = '../src/index'
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow">
                <div className="container">
                    <a className="navbar-brand" href={home}><img  src={logoInicio} id="logo" alt="LogoRescatandoPatitas"/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav justify-content-end w-100 align-items-center">
                            <li className="nav-item ">
                                <a className="nav-link navHover txtColor" href={home}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navHover  txtColor" href={home}>Quiero Adoptar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navHover  txtColor" href={home} >Tienda medicamentos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navHover  txtColor" href={home}>Quienes somos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navHover  txtColor" href={home}>Contacto</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navHover txtColorCarrito carrito" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> <BsCartCheck/><span id="cantidadEnCarrito" className="badge rounded-pill bg-danger notificacion">0</span></a>                            
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header> 
    );
}  
export default NavBar;