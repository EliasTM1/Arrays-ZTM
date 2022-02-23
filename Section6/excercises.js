// * Reverse a string

// * Esto es lo que escibi sin pensar a detalle en validaciones 

function volteaElString(frase) {
    let result = "";
    let newArr = frase.split('');
    for (let index = newArr.length - 1; index >= 0; index--) {
        result += newArr[index];
    };
};


volteaElString('Hola mi nombre es Elias');


// ! Asi es como debio de ser en el sentido de  validaciones 

function volteaElStringNow(frase) {
    // ? Siempre es una buena idea agregar algun tipo de validacion 
    // ! No es una buena idea asumir que en una entrevista nos mandaran los parametros que necesitamos. 
    // * Los string se pueden trabajar con la misma sintaxys que las arrays 
    let result = "";
    let newArr = frase.split('');
    for (let index = newArr.length - 1; index >= 0; index--) {
        result += newArr[index];
    };
};

volteaElStringNow('Hola mi nombre es Elias');


// ? Built in methods

function reverseBuiltIn(str) {
    return str.split('').reverse().join('');
};

// ? Arrow Function 

const reverse = (str) => str.split('').reverse().join('');

reverseBuiltIn("Elias T. Manzano");


// ! Spread my string 

function spreadMe(str) {
    let spread = [...str]
    console.log(spread)
}


spreadMe("Elias Manzano")