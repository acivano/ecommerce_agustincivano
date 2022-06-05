import { redondeo } from "../../helper/productos"
import ItemCount from "../itemCount/ItemCount"

function Item ({productos}) {
    let initialItem = 1

    function mostrar(idProducto, count){
        console.log(`Se ha guardado ${count} unidad/uidades del item: '${idProducto}' en el carrito `)
    }

    return (
        <>
        {productos.map((producto) => (
            <div key={producto.id} className="d-flex justify-content-center">
                <div className="seccion_datos">
                    <div className="card-body d-flex flex-column align-content-center justify-content-center">
                        <img className="img-fluid" src={producto.imgUrl} alt="ImgProd"/>
                        <p className="card-text text-center mt-1 altotexto">{producto.nombre}</p>
                        <h3 className="montoDonacion text-center mt-1">{redondeo(producto.precioventa)}</h3>
                        <ItemCount producto={producto} initial={initialItem} muestroConsola={mostrar}/>    
                    </div>
                </div>
            </div>
        ))}
        </>
    )
}
export default Item