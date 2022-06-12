import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";


const Footer = () => {
    return (
        <footer className="container-fluid d-flex flex-wrap justify-content-evenly align-items-center py-3 px-3 mb-0 mt-4 border-top fixed-bottom bg-white footerSize">
            <div className="col-md-4 d-flex align-items-center">
                <span>Derechos reservados ©</span>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a class="txtColor" href="https://www.Facebook.com" target="_blank"><BsFacebook class="bi bi-facebook"></BsFacebook></a></li>
                <li className="ms-3"><a class="txtColor" href="https://www.instagram.com" target="_blank"><BsInstagram class="bi bi-instagram"></BsInstagram></a></li>
                <li className="ms-3"><a class="txtColor" href="https://www.Youtube.com" target="_blank"><BsYoutube class="bi bi-youtube"></BsYoutube></a></li>
            </ul>
        </footer>
    )
}

export default Footer