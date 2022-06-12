import { redondeo } from "../../helper/productos"
import { NavLink} from "react-router-dom"

function Item ({producto}) {
    return (
        <>
            <div className="d-flex justify-content-center">
                <NavLink className="text-decoration-none" to={`/detalle/${producto.id}`}>
                    <div className="seccion_datos">
                        <div className="card-body d-flex flex-column align-content-center justify-content-center">
                            <img className="img-fluid" src={producto.imgUrl} alt="ImgProd"/>
                                <p className="text-decoration-none card-text text-center mt-1 altotexto text-dark">{producto.nombre}</p>
                            <h3 className="text-decoration-none montoDonacion text-center mt-1 text-dark">{redondeo(producto.precioventa)} c/u</h3>
                        </div>
                    </div>
                </NavLink>
            </div>
        </>
    )
}
//<ItemCount producto={producto}/>    
export default Item