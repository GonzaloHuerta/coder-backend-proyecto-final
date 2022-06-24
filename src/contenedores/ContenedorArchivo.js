import fs from 'fs';

class ContenedorArchivo{
    constructor(rutaDB){
        this.rutaDB = rutaDB;
    }

    async getAll(){
        let contenidoParse;
        try {
            let contenido = await fs.promises.readFile(__dirname + this.rutaDB, 'utf-8')
            contenidoParse = JSON.parse(contenido);
        } catch (error) {
            console.log(error)
        }
        return contenidoParse;
    }

    async getById(id){
        let retorno;
        try {
            let todos = await this.getAll();

            const buscarObjetoPorId = todos.find(producto => producto.id == id);
            
            buscarObjetoPorId ? retorno = buscarObjetoPorId : retorno = null;
        
        } catch (error) {
            console.log(error)
        }

        return retorno;
    }

    async create(obj){
        try {
            let todos = await this.getAll();
            let id;
            let timestamp = Date.now();
            
            if(todos.length===0){
                id=1;
            }
            else{
                id = todos[todos.length-1].id +1;
            }

            todos.push({...obj, timestamp, id});

            await fs.promises.writeFile(__dirname + this.rutaDB, JSON.stringify(todos));

            return id;
        } catch (error) {
            console.log(error)
        }
    }

    async deleteById(id){
        try {
            let todos = await this.getAll();
            let nuevoContenido = todos.filter(producto=>producto.id != id);
            console.log(nuevoContenido);
            await fs.promises.writeFile(__dirname + this.rutaDB, JSON.stringify(nuevoContenido))
            
        } catch (error) {
            console.log(error)
        }
    }
}


export default ContenedorArchivo;