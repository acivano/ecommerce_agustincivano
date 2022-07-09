import { useParams } from "react-router"
import { useState, useEffect } from "react"
import ItemDetail from "../itemDetail/ItemDetail";
import Loading from "../loading/Loading";
import { doc, getDoc, getFirestore } from "@firebase/firestore";


const ItemDetailContainer = () => {
    const {id} = useParams()
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const db = getFirestore()
        const queryProducts = doc(db, 'productos', id)
        getDoc(queryProducts)
        .then(resp => resp.data() && setProduct({id: resp.id, ...resp.data()})) 
        .catch((err) => {
            console.log(`Error: ${err}`);
        })
        .finally(() => {
            setLoading(false)
        });
    }, []);
        return (
            <main>
                <section  className="container seccionDonacion">
                    <div id="contenedorPadre">
                        { 
                            !product ?  
                        
                                (loading ? 
                                    <Loading/>
                                :
                                    <p className="text-center">Producto No encontrado</p>
                                )
                                :
                                <ItemDetail  product={product}/>
                            }
                    </div>  
                </section>
            </main>
    )
}

export default ItemDetailContainer