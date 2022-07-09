import Item from "../item/Item"

function ItemList ({products}) {

    return (
        <> 
            {
                products.length > 0 ?
                products.map((product) => (
                    <Item key={product.id} product ={product}/>
                ))
                :
                    <h3 className='w-100 text-center'>No se encontraron elementos</h3>
            }
        </>
    )
}

export default ItemList

