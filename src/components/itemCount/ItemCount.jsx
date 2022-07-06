import { useState } from "react"


function ItemCount ({producto, agregarProdCarrito, initial, origin}) {
    const [count, setCount] = useState(initial)

    const agregar = () => {
        agregarProdCarrito(count)
    }
    const sumar = ()=> {
        if (count < producto.stockdisponible) {
            setCount(count + 1)
            if(origin === 'Cart')
            {
                agregarProdCarrito(count + 1)
            }
        }
    }
    const restar = ()=>{
        if (count > 1) {
            setCount(count - 1)
            if(origin === 'Cart')
            {
                agregarProdCarrito(count - 1)
            }
        }
    }
    return (
            <>
                <div className="form-floating mb-3">
                    <div className="d-flex justify-content-center">
                        <button onClick={restar} className="botonPersonalizado2 mt-1"> - </button>
                        <p className="botonPersonalizado2 mt-1 w-100">{count}</p>
                        <button onClick={sumar} className="botonPersonalizado2 mt-1"> + </button>
                    </div>
                </div>
                {(origin==='Cart')?
                    <></>
                    :
                    <button onClick={agregar} className="botonPersonalizado mt-1">Agregar Producto</button>
                }
            </>
        )
    }
    export default ItemCount