import { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useModalFormContext } from "../../context/ModalFormContext";
import { useCartContext } from "../../context/CartContext";
import { addDoc, collection, getFirestore, query, where, documentId, writeBatch, getDocs } from "@firebase/firestore";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

export function ModalForm() {
    const {mostrarModal, ocultarModal} = useModalFormContext()
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
    const {cart, precioTotal, emptyCart} = useCartContext()
    const [show, setShow] = useState(false);
    const [idOrden, setIdOrden] = useState('');

    function confirmarCompra(e) {
        
        if (nombre !== '' && correo.includes("@") && telefono !== '') {  
            let order = {}
            order.buyer = {name:nombre, email:correo, phone:telefono}
            order.total = precioTotal()
            order.items = cart.map(product =>{
                const id = product.id
                const nombre = product.nombre
                const cantidad = product.cantidad
                const precio = product.precioventa
                return{id, nombre, cantidad, precio}
            })
    
            const db = getFirestore()
            const orderCollection = collection(db, "orders")
            addDoc(orderCollection, order)
            .then(resp =>  {
                setIdOrden(resp.id)
                setShow(true)
            })
            .finally(()=> {
                actualizarStock()
                emptyCart()
                handleClose()
                
            })
            
        }
    }
    async function actualizarStock() {
        const db = getFirestore()
        const queryColleccionStock = collection(db, "productos" )
        const queryActualizarStock = await query( queryColleccionStock, where( documentId(),'in', cart.map(item => item.id)))

        const batch = writeBatch(db)

        await getDocs(queryActualizarStock)
        .then(
            resp=> resp.docs.forEach( res => batch.update(res.ref,
                {
                    stockdisponible : res.data().stockdisponible - cart.find(prd => prd.id === res.id).cantidad
                }))
            )
        .catch(err => console.log(err))
        batch.commit()
    }
    const handleClose = () => ocultarModal();

    return (
        <>
        <ToastContainer position={'bottom-center'} className='mb-5'>
            <div className='mb-5'>
                <Toast onClose={() => setShow(false)} show={show} bg='success'>
                    <Toast.Header>
                    <strong className="me-auto">Alerta</strong>
                    </Toast.Header>
                    <Toast.Body className='Success'>{nombre}, tu código de compra es: <span className='fw-bold'>{idOrden}</span></Toast.Body>
                </Toast>
            </div>
        </ToastContainer>
        <Modal show={mostrarModal} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Datos de contacto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                        required
                        type="text"
                        placeholder="Nombre"
                        autoFocus
                        onChange={event =>  setNombre(event.target.value)}
                        
                    />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="name@example.com"
                        autoComplete="username"
                        onChange={event =>  setCorreo(event.target.value)}                    
                    />
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control
                        required
                        type="tel"
                        placeholder="111111"  
                        onChange={event =>  setTelefono(event.target.value)}                    
                    />
                </Form.Group>            
            <Button variant="secondary" onClick={handleClose}>
                Cancelar
            </Button>
            <Button type="submit" variant="primary" onClick={confirmarCompra}>
                Finalizar Compra
            </Button>
            </Form>
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>
        </>
    );
    }