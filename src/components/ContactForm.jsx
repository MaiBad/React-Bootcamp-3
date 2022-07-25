import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import ContactClass from '../models/contact.class'
import '../style/ContactForm.css'

const ContactForm = ({ agregar }) => {

    const nameRef = useRef('')
    const lnameRef = useRef('')

    function enviarContacto(e) {
        e.preventDefault()
        if (nameRef.current.value !== '' || lnameRef.current.value !== '') {
            const contacto = new ContactClass(
                nameRef.current.value,
                lnameRef.current.value,
                true
            )
            agregar(contacto)
            nameRef.current.value = ''
            lnameRef.current.value = ''
        }
    }

    return (
        <div>
            <form className='form' onSubmit={enviarContacto}>
                <input className='input' ref={nameRef} type='text' id='contactName' placeholder='Nombre(s)' />
                <input className='input' ref={lnameRef} type='text' id='contactLastName' placeholder='Apellido(s)' />
                <button className='button' type='submit'>Agregar</button>
            </form>
        </div>
    )
}

ContactForm.propTypes = {
    agregar: PropTypes.func.isRequired
}


export default ContactForm