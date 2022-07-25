import React, { useState } from 'react'
import Contact from './Contact'
import ContactClass from '../models/contact.class'
import ContactForm from './ContactForm'
import '../style/ContactList.css'

const ContactList = () => {

    const contacto1 = new ContactClass('Jeferson', 'Limay', true)
    const contacto2 = new ContactClass('Jose', 'Antezano', false)
    const contacto3 = new ContactClass('Ana', 'Chavez', true)
    const contacto4 = new ContactClass('Diana', 'Nieves', false)
    const contacto5 = new ContactClass('Sebastian', 'Ortega', true)

    const [Contactos, setContactos] = useState(
        [contacto1,contacto2, contacto3,contacto4,contacto5]
    )

    function cambiarEstado(contacto) {
        let indice = Contactos.indexOf(contacto)
        let lista = [...Contactos]
        lista[indice].estado = !lista[indice].estado
        setContactos(lista)
    }

    function eliminarContacto(contacto) {
        let indice = Contactos.indexOf(contacto)
        let lista = [...Contactos]
        lista.splice(indice, 1)
        setContactos(lista)
    }

    function agregarContacto(contacto) {
        let lista = [...Contactos]
        lista.push(contacto)
        setContactos(lista)
    }

    return (
        <div className='container'>
            <div>
                <h3 className='title'>Tus Contactos</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th className='table-header'>Contacto</th>
                            <th className='table-header'>Estado</th>
                            <th className='table-header'>Acciones</th>
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                        {Contactos.map((contacto, indice) => {
                            return (
                                <Contact
                                    key={indice}
                                    contacto={contacto}
                                    modificar={cambiarEstado}
                                    eliminar={eliminarContacto}>
                                </Contact>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <ContactForm agregar={agregarContacto}></ContactForm>
        </div>
    )
}

export default ContactList