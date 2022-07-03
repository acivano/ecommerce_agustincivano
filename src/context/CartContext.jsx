import { createContext, useContext, useState } from "react"

const CartContext = createContext([])

export const useCartContext = ()=> useContext(CartContext)

const CartContextProvider = ({children}) => {
    //Estados y Funciones
    const [cart, setCart] = useState([])
    const [orden, setOrden] = useState([])

    const addToCart = (item) => {
        if (cart.some((element) => element.id === item.id )){
            const cartNew = cart
            cart.forEach(elemento =>
                {   
                    if(elemento.id === item.id){
                        elemento.cantidad += item.cantidad
                    }
                })
            setCart(cartNew)
        }else{
            setCart([ ...cart, item ])
        }
    }
    
    const mdfItemCart = (item) => {
        if (cart.some((element) => element.id === item.id )){
            const cartNew = cart.filter((prod) => prod.id!==item.id)
            setCart([...cartNew, item])
        }else{
            setCart([ ...cart, item ])
        }
    }
    const emptyCart = () =>{
        setCart([])
    }

    const deleteItem = (id) =>{
        const prodArrayNuevo = cart.filter((prod) => prod.id !== id )
        setCart(prodArrayNuevo)
    }

    const precioTotal = ()=>{
        if (cart.length > 0) {
            return cart.reduce((acum, prod) => acum + prod.cantidad * prod.precioventa, 0)
        }else{
            return 0
        }
    }

    const cantidadProductos =() =>{
        if (cart.length > 0) {
            
            return cart.reduce((acum, prod) => acum + prod.cantidad , 0)
        }else{
            return 0
        }
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            mdfItemCart,
            emptyCart,
            deleteItem,
            precioTotal,
            cantidadProductos
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider