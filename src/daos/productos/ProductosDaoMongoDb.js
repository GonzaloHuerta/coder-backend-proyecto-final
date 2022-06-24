import ContenedorMongoDb from "../../contenedores/ContenedorMongoDb.js";
import { productosSchema } from "../../models/productosSchema.js";

export class ProductosDaoMongoDb extends ContenedorMongoDb{
    constructor(){
        super('productos', productosSchema);
    }
}