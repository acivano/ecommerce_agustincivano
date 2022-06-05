import ItemList from "../itemList/ItemList"

const ItemListContainer = ({titulo}) => {
    return (
        <main>
            <div className="d-flex justify-content-center">
                <h1 className="container">{titulo}</h1>
            </div>
            <section  className="container seccionDonacion">
                <div id="contenedorPadre" className="">
                    <ItemList/>
                </div>
            </section>
        </main>
    )
}

export default ItemListContainer