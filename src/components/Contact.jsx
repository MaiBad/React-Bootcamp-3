import React from 'react'
import PropTypes from 'prop-types'
import Contacts from '../models/contact.class'
import '../style/Contact.css'

const Contact = ({ contacto, modificar, eliminar }) => {

    function devolverEstado() {
        if (contacto.estado) {
            return (
                <span className='etiqueta' style={{backgroundColor: '#65c703'}}>Conectado</span>
            )
        } else {
            return (
                <span className='etiqueta' style={{backgroundColor: '#515e45'}}>Desconectado</span>
            )
        }
    }

    function devolverAccion() {
        if (contacto.estado) {
            return (
                <i className="fa-solid fa-toggle-on" style={{color:'greenyellow'}}></i>
            )
        } else {
            return (
                <i className="fa-solid fa-toggle-off" style={{color:'red'}}></i>
            )
        }
    }

    return (
        <tr>
            <td className='table-data'>
                <span>{contacto.nombre} {contacto.apellido}</span>
            </td>
            <td className='table-data'>
                {devolverEstado()}
            </td>
            <td className='table-data acciones'>
                <span className='accion' onClick={() => modificar(contacto)}>{devolverAccion()}</span>
                <span className='accion' style={{color:'coral'}} onClick={() => eliminar(contacto)}><i className="fa-solid fa-trash-can"></i></span>
            </td>
        </tr>
    )
}

Contact.propTypes = {
    contacto: PropTypes.instanceOf(Contacts).isRequired,
    modificar: PropTypes.func.isRequired,
    eliminar: PropTypes.func.isRequired
}

export default Contact