
import ItemCount from "../itemCount/ItemCount"
import { redondeo } from "../../helper/productos"

const ItemDetail = ({producto}) => {
    return (
        <>
        <div className="d-flex justify-content-center">
            <div className="seccion_datos w-75">
                <div className="card-body d-flex align-content-center justify-content-center pb-0 w-100">
                    <img className="img-fluid-70 border-end border-bottom w-100" src={producto.imgUrl} alt="ImgProd"/>
                    <div className="card-body flex-shrink-1 d-flex flex-column align-content-center justify-content-around border-bottom">
                        <h4 className="card-text text-center mt-1 altotexto">{producto.nombre}</h4>
                        <h4 className=" text-center mt-1">{redondeo(producto.precioventa)} c/u</h4>
                        <ItemCount producto={producto}/>    
                    </div>
                </div>
                <div>
                    <h4 className="card-text text-center mt-5 altotexto">Descripción del producto</h4>
                    <p className="m-5 mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa porro odio similique rem consectetur, aut, voluptates minus dolor repudiandae, sint ducimus provident iste neque commodi repellat excepturi dicta repellendus optio!
                    Assumenda molestiae ipsa aspernatur dolore sed officia sit molestias consequatur quia autem, voluptatibus necessitatibus suscipit quae unde earum ratione harum enim architecto libero quibusdam porro placeat delectus. Id, libero optio?
                    Architecto voluptas porro sint. Nostrum eum itaque nesciunt excepturi optio sequi tempora laboriosam quam cum, reiciendis cumque delectus expedita velit fugit dolores, corporis laudantium incidunt! Earum beatae dolorem voluptate ducimus.
                    Praesentium accusamus labore veritatis facere dicta inventore aspernatur. Inventore, consequatur quam quia debitis eaque impedit ipsum laboriosam recusandae vitae culpa fugiat repellendus numquam corporis autem vero aliquam libero maiores dolore.
                    Minus impedit temporibus aspernatur, fugit doloremque voluptas voluptate exercitationem aliquam deserunt delectus dolorum blanditiis aperiam nobis! Odio eos reiciendis dolore. Obcaecati repellendus eligendi, magnam veniam quam et saepe voluptatem dolore.
                    Rem at doloribus sit quaerat corporis aspernatur a. Magni temporibus reprehenderit est aspernatur quo tempore, eum neque ex laudantium enim quos dolores quas nostrum perferendis cumque sint provident rerum ipsum.</p>
                </div>
            </div>
        </div>
    </>
    )
}

export default ItemDetail