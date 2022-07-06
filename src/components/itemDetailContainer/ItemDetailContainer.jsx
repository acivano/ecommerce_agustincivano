import { useParams } from "react-router"
import { useState, useEffect } from "react"
import ItemDetail from "../itemDetail/ItemDetail";
import Loading from "../loading/Loading";
import { doc, getDoc, getFirestore } from "@firebase/firestore";


const ItemDetailContainer = () => {
    const {id} = useParams()
    const [producto, setProducto] = useState()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const db = getFirestore()
        const queryProductos = doc(db, 'productos', id)
        getDoc(queryProductos)
        .then(resp=> setProducto({id: resp.id, ...resp.data()}))
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
                            <Loading/>
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