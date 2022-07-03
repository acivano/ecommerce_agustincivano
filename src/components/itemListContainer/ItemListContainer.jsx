import ItemList from "../itemList/ItemList"
import { useState, useEffect } from "react"
import Loading from "../loading/Loading";
import { collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import { useParams } from "react-router";

const ItemListContainer = ({titulo}) => {
    const {tipoId} = useParams()

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    

    useEffect(()=>{
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
        
        let queryProductos = tipoId === undefined ?  queryCollection :  query( queryCollection, where('tipo', '==', tipoId))
        getDocs(queryProductos)
        .then(data => setProductos( data.docs.map( producto => ({id: producto.id, ...producto.data()} ))))
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
                <h1 className="container">{titulo}</h1>
            </div>
            <section  className="container seccionDonacion">
                <div id="contenedorPadre" className="">
                    { loading ? 
                        <Loading/>
                    :
                        <ItemList  productos={productos}/>
                    }
                </div>
            </section>
        </main>
    )
}

export default ItemListContainer
