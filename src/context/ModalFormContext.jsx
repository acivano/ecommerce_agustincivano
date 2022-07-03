import { createContext, useContext, useState } from "react"

const ModalFormContext = createContext([])

export const useModalFormContext = ()=> useContext(ModalFormContext)

const ModalFormContextProvider = ({children}) => {
    //Estados y Funciones

    const [mostrarModal, setMostrarModal] = useState(false)

    const ocultarModal = () =>{
        setMostrarModal(false)
    }
    const activarModal = () =>{
        setMostrarModal(true)
    }
    return (
        <ModalFormContext.Provider value={{
            mostrarModal,
            ocultarModal,
            activarModal
        }}>
            {children}
        </ModalFormContext.Provider>
    )
}

export default ModalFormContextProvider