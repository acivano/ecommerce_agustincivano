import logoInicio from '../../images/logo.png'
import CartWidget from '../cartWidget/CartWidget';
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow">
                <div className="container">
                    <Link to='/' className="navbar-brand">
                        <img  src={logoInicio} id="logo" alt="LogoRescatandoPatitas"/>
                    </Link> 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav justify-content-end w-100 align-items-center">
                            <li className="nav-item">
                                <Link to='/' className="nav-link navHover  txtColor" >Tienda medicamentos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/tipo/Perro' className="nav-link navHover  txtColor">Medicamentos para Perros</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/tipo/Gato' className="nav-link navHover  txtColor">Medicamentos para Gatos</Link>
                            </li>
                            <li className="nav-item">
                                <CartWidget/>                            
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header> 
    );
}  
export default NavBar;