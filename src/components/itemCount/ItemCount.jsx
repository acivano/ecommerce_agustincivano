import { useState } from "react"

function ItemCount ({producto}) {
    const initial= 1
    const [count, setCount] = useState(initial)

    function mostrar(idProducto, count){
        console.log(`Se ha guardado ${count} unidad/uidades del item: '${idProducto}' en el carrito `)
    }


    const sumar = ()=> {
        if (count < producto.stockdisponible) {
            setCount(count + 1)
        }
    }

    const restar = ()=>{
        if (count> initial) {
            setCount(count - 1)
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
                <button onClick={mostrar(producto.id,count)}  className="botonPersonalizado mt-1">Agregar</button>
            </>
        )
    }
    export default ItemCount