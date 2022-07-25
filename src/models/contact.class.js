export default class Contacto {
    nombre = '';
    apellido = '';
    estado = false;

    constructor(nombre, apellido, estado) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.estado = estado
    }
}