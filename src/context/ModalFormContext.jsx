import { createContext, useContext, useState } from "react"

const ModalFormContext = createContext([])

export const useModalFormContext = ()=> useContext(ModalFormContext)

const ModalFormContextProvider = ({children}) => {
    //States & Functions

    const [showModal, setShowModal] = useState(false)

    const hideModal = () =>{
        setShowModal(false)
    }
    const activateModal = () =>{
        setShowModal(true)
    }
    return (
        <ModalFormContext.Provider value={{
            showModal,
            hideModal,
            activateModal
        }}>
            {children}
        </ModalFormContext.Provider>
    )
}

export default ModalFormContextProvider