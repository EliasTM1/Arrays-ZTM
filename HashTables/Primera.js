
// ? Reference type
// * Recordemos que los objetos en Js no son iguales a pesar de que contengan la misma informacion
// * Cada que creamos un nuevo objeto, este se graba en un espacio de memoria nuevo
// * cuando hacemos referencia a un objeto, no se crea un nuevo espacio en memoria
// * en su lugar se hace "referencia" al espacio de memoria que ya tiene al objeto guardado 
var object1 = { some: 10 }
var object2 = object1
var object3 = { some: 10 }


// ? Context vs Scope
// * la palabra this, se refiere al contexto en el que se encuentra,
// * si nosotros hacemos un console.log(this) em el scope global 
// * se imprime todo el objeto "WINDOW"

function name() {
    a: () => {
        console.log(this)
    }
}

// * Si corremos la funcion de arriba. this se refiera al objeto que la contiene 

// ? Instatiation 

// * Crating a class

class Persona {
    constructor(name, age, nationality) {
        this.name = name
        this.age = age
        this.nationality = nationality
    }

    personaSaluda() {
        console.log(`Hola mi nombre es ${this.name} tengo ${this.age} y soy de ${this.nationality}`)
    }
}

// * Cuandoe extendemos una clase tenemos,
// * cuando extendemos una clase, tenemos que llamar super()
// ! SUPER es el constructor de la clase que estamos extendiendo
// ! en este caso la clase "persona"
// * 

class Empledado extends persona {
    constructor(name, age, nationality) {
        super(name, age, nationality)
    }
    play() {
        console.log(`Im a ${this.nationality}`)
    }
}

// * Para crear nuevas instancias de las clases que escribimos
const primerEmpleado = new Empledado('Elias', 28, 'Mexicano')
const segundoEmpleado = new Empledado('Elias', 28, 'Mexicano')