import { priceFormat } from "../../helper/methods"
import { Link} from "react-router-dom"

function Item ({product}) {
    return (
        <>
            <div className="d-flex justify-content-center">
                <Link className="text-decoration-none" to={`/detalle/${product.id}`}>
                    <div className="seccion_datos">
                        <div className="card-body d-flex flex-column align-content-center justify-content-center">
                            <img className="img-fluid" src={product.imgUrl} alt="ImgProd"/>
                                <p className="text-decoration-none card-text text-center mt-1 altotexto text-dark">{product.nombre}</p>
                            <h3 className="text-decoration-none montoDonacion text-center mt-1 text-dark">{priceFormat(product.precioventa)} c/u</h3>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}
export default Item