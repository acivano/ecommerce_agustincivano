import ItemCount from "../itemCount/ItemCount"
import { priceFormat } from "../../helper/methods"
import { useCartContext } from "../../context/CartContext"
import { BsTrash } from "react-icons/bs";



const ItemCart = ({item}) => {
    const origin = 'Cart'
    const { mdfItemCart, deleteItem } = useCartContext()

    function modifyCartStatus(count){
        mdfItemCart({...item, cantidad: count} )
    }

    return (  
        <div key={item.id} className="d-flex flex-row justify-content-between align-items-center border-bottom">
            <img className="imgCarrito" src={item.imgUrl} alt="Producto1"/>
            <div className="d-flex flex-column columnaNombreCarrito w-50">
                <h2 className="align-self-start mt-5">{item.nombre}</h2>
                <div className="d-flex flex-row justify-content-between align-items-end">
                    <h4 className=" text-start mt-1 w-75">{`${item.cantidad} u. x ${priceFormat(item.precioventa)} =  `}<span className='h2'>{priceFormat(item.precioventa * item.cantidad)}</span></h4>   
                </div>
                <div className="form-floating mb-3 w-50 align-self-center d-flex flex-row justify-content-between">
                    <ItemCount producto={item} agregarProdCarrito={modifyCartStatus} initial={item.cantidad} origin={origin}/>
                    <button onClick={()=>deleteItem(item.id)} className="btn txtColorCarrito carrito"> <BsTrash/></button>
                </div>
            </div> 
        </div> 
    )
}


export default ItemCart