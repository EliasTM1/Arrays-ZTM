//* When we create an  object in js, is truly faste when it comes to inserting, lookup, delete, search

let perro = {
    age: 11,
    name: "Benjy",
    bark: function () {
        console.log('bark bark');
    }
}


// * perro.age  O(1)
// * perro.spell = "Soy un perro que habla"  O(1)
// * perro.bark()  O(1


class HashTable {
    constructor(size) {
        this.data = new Array(size)
    }

    _hash(key) {
        let hash = 0
        for (let index = 0; index < key.length; index++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }

    // * key , Value
    set(itemLooked, value) {
        let address = this._hash(itemLooked)
        // this.data[address] = { itemLooked: vzalue }
        // console.log(this.data)
        // ? Si no existe nada en esta posicion 
        if (!this.data[address]) {
            // ? Crea un Array en vacia en esa posicion 
            this.data[address] = [];
            // ? Al array vacio, se le agregan los items que se desean insterar
            this.data[address].push([itemLooked, value])

        }

    }

    get(itemLooked) {
        return this.data[itemLooked]
    }
}

// * charCodeAt()
// * Te devuelve un numero entre 0 y 65535 que representa ese caracter en e; UTF-16
// * 

const myHasbTable = new HashTable(50);

myHasbTable.set()