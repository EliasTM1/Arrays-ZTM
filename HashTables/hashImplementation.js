class HashTable {
    constructor(size) {
        this.vaues = {};
        this.length = 0;
        this.size = 0;
        this.data = new Array(size)
    }

    // * Hashing functions
    caalculate() {
        return key.toString().length % this.size;
    }

    letMeSeeMy() {
        console.log(this.data)
    }

    set() {

    }


    get() {

    }
}


// * Crear una instancia de la clase 
const ht = new HashTable(100);
// * Agregar datos a la tabla
ht.letMeSeeMy()
// * Search element