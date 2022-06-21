import ItemList from "../itemList/ItemList"
import { useState, useEffect } from "react"
import { productosPromise } from "../../helper/productos";

const ItemListContainer = ({titulo}) => {

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
        <main>
            <div className="d-flex justify-content-center">
                <h1 className="container">{titulo}</h1>
            </div>
            <section  className="container seccionDonacion">
                <div id="contenedorPadre" className="">
                    { loading ? 
                        <div className="text-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only"></span>
                            </div>
                        </div>
                    :
                        <ItemList  productos={productos}/>
                    }
                </div>
            </section>
        </main>
    )
}

export default ItemListContainer
