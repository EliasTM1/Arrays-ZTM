// * Node class to instansiate nodes
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//  * Creating a linked list with a Class
class LinkedList {
    // * When the class is instantiated, 
    // * the first value we pass is the head of the list
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        }
        // * Thing we wanna keep track of
        this.tail = this.head;
        this.length = 1;
    }

    append(appendValue) {
        // * Crear un nuevo NODO
        const newLinkedListItem = new Node(appendValue)
        //  * En la creacion, this.tail era this.head
        //  * Necesitamos reasigna el tail.next el siguiente nodo
        this.tail.next = newLinkedListItem;
        //  * A tail le asignamos el valor el nuevo objeto 
        this.tail = newLinkedListItem;
        //  * Aumentamos su propiedad length
        this.length++;
        return this;
    }

    prePend(appendValue) {
        // * Crear un nuevo NODO
        const newLinkedListItem = new Node(appendValue)
        //  * Tenemos que poscionar nuestro nuevo NODO
        //  * el valor next del nuevo NODO tienes que ser 
        //  * lo que antes estaba como head
        newLinkedListItem.next = this.head;
        //  * Ahora el nuevo head es el nuevo NODO
        this.head = appendValue
        //  * Aumentamos su propiedad length  
        this.length++
        return this;
    }

    letMeSee() {
        console.log(this)
    }

    insert(index, appendValue) {
        if (index > this.length) {
            console.log('No puedes insertar una posicion que no existe')
            return
        }
        // * Crear un nuevo NODO
        const newLinkedListItem = new Node(appendValue)
        for (let i = 0; i < index - 1; i++) {
            console.log(this.head.next[i])

        }
    }
}


let myFirstLinkedList = new LinkedList(10);
myFirstLinkedList.append(15)
myFirstLinkedList.append(20)
myFirstLinkedList.prePend(300)
myFirstLinkedList.insert(2, 15)
myFirstLinkedList.letMeSee()


// ? Inster 
// !                 INDEX    VALUE    
// * myClass.insert(   2    ,   10   )

// ?  10 --- 5 --- 16  --- 30  --- 20

// let linkedList = { head: { value: 10, next: { value: 5, next: null } } }


let linkedList = { head: { value: 10, next: { value: 5, next: { value: 16, next: null } } } }
function logMyValues() {

}
let headNTail = {
    head: {
        value: 10,
        next: {
            value: 5,
            next: null
        }
    }
}


