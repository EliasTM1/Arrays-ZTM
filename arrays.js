const strings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// ? Push
strings.push('patos')
// * Output
// * [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'patos' ]
// ? Time Complexity O(1)
// ! Agregar un elemento al final del array
// ? Sin importar lo grande que sea el array solamente vamos a agregar un elemento, no iteraciones


// ? Locating by index [2]
strings[2]
// ? Time Complexity O(1)
// * Output
// * [ 2 ]
// ! Recordemos que los arrays comienzan a contar desde el 0
// ! Nos regresa el valor que se encuentra en el index 2
// ? Sin importar lo grande que sea el array solamente vamos a remover un elemento al final de array, no iteraciones


// ? Pop
strings.pop()
// ? Time Complexity O(1)
// * Output
// * [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ]
// ! Eliminar el ultimo elemento del array
// ? Sin importar lo grande que sea el array solamente vamos a remover un elemento al final de array, no iteraciones


// ? unshift
strings.unshift('x')
// ? Time Complexity O(n)
// * Output
// * [ 'x', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// ! Agregar un elemento al principio del array
// ? En este caso estamos recoriendo todos los index existenes dentro, por eso tiene un time-complexity mayor 


// ? splice 
strings.splice(2, 0, 'Aliens')
// ! Primer parametro, desde donde queremos conezar
// ! Segundo posiciones queremos eliminar a partir del punto de inicio 
// ! Tercero el valor que deseamos insertar dentro del array
console.log(strings, "This is your arr")
// ? Time Complexity O(n)
// * Output
// * [ 'x', 0, 'Aliens', 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// ! Agregar elementos en medio del array
// ? En este caso estamos recoriendo todos los index existenes dentro, por eso tiene un time-complexity mayor 




