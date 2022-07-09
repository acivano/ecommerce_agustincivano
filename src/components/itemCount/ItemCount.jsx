import { useState } from "react"


function ItemCount ({product, addProductToCart, initial, origin}) {
    const [count, setCount] = useState(initial)

    const add = () => {
        addProductToCart(count)
    }
    const addOne = ()=> {
        if (count < product.stockdisponible) {
            setCount(count + 1)
            if(origin === 'Cart')
            {
                addProductToCart(count + 1)
            }
        }
    }
    const subtractOne = ()=>{
        if (count > 1) {
            setCount(count - 1)
            if(origin === 'Cart')
            {
                addProductToCart(count - 1)
            }
        }
    }
    return (
            <>
                <div className="form-floating mb-3">
                    <div className="d-flex justify-content-center">
                        <button onClick={subtractOne} className="botonPersonalizado2 mt-1"> - </button>
                        <p className="botonPersonalizado2 mt-1 w-100">{count}</p>
                        <button onClick={addOne} className="botonPersonalizado2 mt-1"> + </button>
                    </div>
                </div>
                {(origin==='Cart')?
                    <></>
                    :
                    <button onClick={add} className="botonPersonalizado mt-1">Agregar Producto</button>
                }
            </>
        )
    }
    export default ItemCount