import ContenedorArchivo from "../../contenedores/ContenedorArchivo.js";

export class ProductosDaoArchivo extends ContenedorArchivo{
    constructor(){
        super('../../db/productos.json');
    }
}