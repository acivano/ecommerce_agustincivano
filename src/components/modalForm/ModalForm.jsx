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
    const {showModal, hideModal} = useModalFormContext()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const {cart, totalPrice, emptyCart} = useCartContext()
    const [show, setShow] = useState(false);
    const [idOrden, setIdOrden] = useState('');
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }else{
            event.preventDefault();
            confirmarCompra()
        }
        setValidated(true);
    };

    function confirmarCompra(e) {
        let order = {}
        order.buyer = {name:name, email:email, phone:phone}
        order.total = totalPrice()
        order.items = cart.map(product =>{
            const id = product.id
            const name = product.nombre
            const count = product.cantidad
            const price = product.precioventa
            return{id, name, count, price}
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
        .catch(err =>             
            console.log(`Error: ${err}`)
        )
        batch.commit()
    }
    const handleClose = () => hideModal();

    return (
        <>
        <ToastContainer position={'bottom-center'} className='mb-5'>
            <div className='mb-5'>
                <Toast onClose={() => setShow(false)} show={show} bg='success'>
                    <Toast.Header>
                    <strong className="me-auto">Alerta</strong>
                    </Toast.Header>
                    <Toast.Body className='Success'>{name}, tu código de compra es: <span className='fw-bold'>{idOrden}</span></Toast.Body>
                </Toast>
            </div>
        </ToastContainer>
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Datos de contacto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                        required
                        type="text"
                        placeholder="Nombre"
                        autoFocus
                        onChange={event =>  setName(event.target.value)}
                        
                    />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="name@example.com"
                        autoComplete="username"
                        onChange={event =>  setEmail(event.target.value)}                    
                    />
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control
                        required
                        type="tel"
                        placeholder="111111"  
                        onChange={event =>  setPhone(event.target.value)}                    
                    />
                </Form.Group>            
                <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                <Button type="submit" variant="primary">Finalizar Compra</Button>
            </Form>
            </Modal.Body>
        </Modal>
        </>
    );
    }