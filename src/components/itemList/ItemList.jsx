import Item from "../item/Item"

function ItemList ({productos}) {

    return (
        <> 
            {
                productos.length > 0 ?
                productos.map((producto) => (
                    <Item key={producto.id} producto ={producto}/>
                ))
                :
                    <h3 className='w-100 text-center'>No se encontraron elementos</h3>
            }
        </>
    )
}

export default ItemList

