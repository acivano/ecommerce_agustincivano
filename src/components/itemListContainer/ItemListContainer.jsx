import ItemList from "../itemList/ItemList"
import { useState, useEffect } from "react"
import Loading from "../loading/Loading";
import { collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import { useParams } from "react-router";

const ItemListContainer = ({title}) => {
    const {tipoId} = useParams()

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    

    useEffect(()=>{
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
        
        let queryProducts = !tipoId ?  queryCollection :  query( queryCollection, where('tipo', '==', tipoId))
        getDocs(queryProducts)
        .then(data => setProducts( data.docs.map( product => ({id: product.id, ...product.data()} ))))
        .catch((err) => {
            console.log(`Error: ${err}`);
        })
        .finally(() => {
            setLoading(false)
            let contenedorPadre =  document.getElementById("contenedorPadre");
            contenedorPadre.classList = 'd-flex flex-column align-content-center justify-content-start gap-4 flex-lg-row flex-lg-wrap mt-5'
        });
    }, [tipoId]);

    return (
        <main>
            <div className="d-flex justify-content-center">
                <h1 className="container">{title}</h1>
            </div>
            <section  className="container seccionDonacion">
                <div id="contenedorPadre" className="">
                    { loading ? 
                        <Loading/>
                    :
                        <ItemList  products={products}/>
                    }
                </div>
            </section>
        </main>
    )
}

export default ItemListContainer
