import { useState, useEffect } from "react"
import { productosPromise } from "../../helper/productos";
import Item from "../item/Item";

function ItemList () {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        productosPromise()
        .then((resp) => {
            setProductos(resp);
        })
        .catch((err) => {
            console.log(`Error: ${err}`);
        })
        .finally(() => {
            setLoading(false)
            let contenedorPadre =  document.getElementById("contenedorPadre");
            contenedorPadre.classList = 'd-flex flex-column align-content-center justify-content-start gap-4 flex-lg-row flex-lg-wrap mt-5'

        });
    }, []);
    return (
        <>
            { loading ? 
            <div className="text-center">
                <div className="spinner-border" role="status">
                <span className="sr-only"></span>
                </div>
            </div>
            :
            <Item  productos={productos}/>
            
            }
        </>
    )
}

export default ItemList