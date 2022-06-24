import dotenv from 'dotenv';
dotenv.config();

let productosDao
    switch (process.env.DB_NAME) {
        case 'archivo':
            import('./productos/ProductosDaoArchivo.js').then(({ProductosDaoArchivo})=>{
                productosDao = new ProductosDaoArchivo();
            })
            break;

        case 'mongoDB':
            import('./productos/ProductosDaoMongoDb.js').then(({ProductosDaoMongoDb})=>{
                productosDao = new ProductosDaoMongoDb();
            })
            break;
        
        case 'firebase':
            import ('./productos/ProductosDaoFirebase.js').then(({ProductosDaoFirebase})=>{
                productosDao = new ProductosDaoFirebase();
            })
            break;

        default:
            console.log('default')
            break;
    }


    let carritosDao
    switch (process.env.DB_NAME) {
        case 'archivo':
            import('./carritos/CarritosDaoArchivo.js').then(({CarritosDaoArchivo})=>{
                carritosDao = new CarritosDaoArchivo();
            })
            break;
    
        case 'mongoDB':
            import('./carritos/CarritosDaoMongoDb.js').then(({CarritosDaoMongoDb})=>{
                carritosDao = new CarritosDaoMongoDb();
            })
            break;

        case 'firebase':
            import ('./carritos/CarritosDaoFirebase.js').then(({CarritosDaoFirebase})=>{
                carritosDao = new CarritosDaoFirebase();
            })
            break;
                
        default:
            console.log('default cart')
            break;
    }

export {productosDao, carritosDao}
