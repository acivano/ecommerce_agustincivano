import { useParams } from "react-router"
import { useState, useEffect } from "react"
import ItemDetail from "../itemDetail/ItemDetail";
import { productosPromise } from "../../helper/productos";


const ItemDetailContainer = () => {
    const {id} = useParams()
    const [producto, setProducto] = useState()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        productosPromise(id)
        .then((resp) => {
            setProducto(resp);
        })
        .catch((err) => {
            console.log(`Error: ${err}`);
        })
        .finally(() => {
            setLoading(false)
    
        });
    }, []);
    if (producto === undefined) {
        return (
            <main>
                <section  className="container seccionDonacion">
                    <div id="contenedorPadre">
                        { loading ? 
                            <div className="text-center">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only"></span>
                                </div>
                            </div>
                        :
                        <p className="text-center">Producto No encontrado</p>
                        }
                    </div>  
                </section>
            </main>
    )
    }else{
        return (
                <main>
                    <section  className="container seccionDonacion">
                        <div id="contenedorPadre">
                            <ItemDetail  producto={producto}/>
                        </div>  
                    </section>
                </main>
        )

    }
}




export default ItemDetailContainer