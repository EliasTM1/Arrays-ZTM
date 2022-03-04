/*

1. Write a JavaScript function to check whether an `input` is an array or not.
function isArray(arr) {
    if(Array.isArray(arr)){
        console.log("Perros")
        return
    }
    return false
}


let arrs  = [3,4,5,6,7];
let str = "gallos";



isArray(str);


2. Write a JavaScript function to clone an array.

let arrd = [1,2,3,7,8,6,4];

function cloneMyArr(arrd) {
    let pollos = [...arrd]
    return pollos
}

cloneMyArr(arrd)


3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

function tercera(arr, index) {
    return arr[index]
}


let arre = [1,2,3,7,6,5];


tercera(arre, 4)

4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. Go to the editor


function name(arr, index = "no value provided") {

    if (index < 0 ){
     index = index * -1;
     console.warn(index)
    }

    let longitud = arr.length;
    let diff = longitud - index;
    let copia = [...arr]

    copia.splice(0, diff)

    console.log(copia);

    if(index === "no value provided" || index === 0) {
        return arr[longitud-1];
    }

  copia.splice(0, diff);

}

let pruebas = [52,85,36,942,23,3]; // index 2 => 23, 3

/*
Regresar la cantidad de numeros que el index indica
empezando por el final

1 Conseguir la longitud del array
2 restarle el index que nos proporcionan
3 Eliminar la diferencia, comenzando desde el principio


name(pruebas, -2);

let pruebasMas = [52,85,36,942,456,234,865,098];

let nameArr = [8,2,4,7,1,52,52,85,36,94,16,75,1115,17482,3,3843,84,3513,843,154,543,8];

*/




// ! Current 

//  ? Iterar sobre el array, cuando existan dos numeros pares insertar un guion en medio 
//  ? 
//  ? 
//  ? 



// * Place a - between pair numbers 

// * Array should return =>  3, 1, 2, - ,2 , 3, 1, 4, - , 4
let arraii = [0, 1, 2, 4, 0, 1, 4, 8];

function toStringes(arrayss) {
    let result = [];
    for (const e of arrayss) {
        let letraNumber = e.toString();
        result.push(letraNumber);
    }
    console.warn(result);
}


function addDash(someArr) {

    let copy = [...someArr];
    let final = [];
    // let numbersToStrings = toStringes(copy);


    for (const elem of copy) {
        let unoAdelante = copy[elem + 1];
        if (elem && unoAdelante)
            console.log(elem)
        console.warn(unoAdelante)
    }

    // console.log(numbersToStrings)

    // for (let i = 0; i < someArr.length; i++) {
    //     let dynamic = copy[i] % 2;
    //     if (dynamic === 0 && copy[i + 1] % 2 === 0) {
    //         let some = "-";
    //         // final.push(dynamic)
    //         // final.push(some)
    //         final.push(copy[i + 1])
    //         // console.log(copy[i + 1]);
    //         // console.log(dynamic)
    //     } else {
    //         // final.push(i)
    //     }
    // };
    // console.log(final)
};

addDash(arraii);

