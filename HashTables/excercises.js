// * Reverse a string

// * Esto es lo que escibi sin pensar a detalle en validaciones 

function volteaElString(frase) {
    let result = "";
    let newArr = frase.split('');
    for (let index = newArr.length - 1; index >= 0; index--) {
        result += newArr[index];
    };
};


// volteaElString('Hola mi nombre es Elias');


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

// volteaElStringNow('Hola mi nombre es Elias');


// ? Built in methods

function reverseBuiltIn(str) {
    return str.split('').reverse().join('');
};

// ? Arrow Function 

const reverse = (str) => str.split('').reverse().join('');

// reverseBuiltIn("Elias T. Manzano");


// ! Spread my string 

//  * Al colocar un string dentro de un array con el spread operator,
//  * se forma un array con cada letra en cada una de las posiciones 

function spreadMe(str) {
    let spread = [...str]
    // console.log(spread)
}


// spreadMe("Elias Manzano")




// * Join and sort 2 arrays 



let exe1 = ["alambre", "baboso", "calcio", "Telurio"];
let exe2 = ["Zinc", "Zorro", "Yemen", "Hitler bueno"];

// ?  Primera manera. 

// function mergeAndSort(prim, second) {

//     let combinados = prim.concat(second)
//     console.log(combinados)

// }


// mergeAndSort(first, second)



//? Second approach

function combinaSinBuilt(first, second) {
    let combined = [];

    for (let firstIndex = 0; firstIndex < first.length; firstIndex++) {
        combined.push(first[firstIndex])
    }

    for (let secondIndex = 0; secondIndex < second.length; secondIndex++) {
        combined.push(second[secondIndex])
    }

    // console.log(combined.sort())
}

// combinaSinBuilt(exe1, exe2)



// !
// !    HOMEWORK
// !    https://leetcode.com/problems/two-sum/description/
// !    HOMEWORK
// !    https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12310382#overview





/*
=====================================================================================================================

####### #     #  #####  ####### ######   #####  ###  #####  #######  #####
#        #   #  #     # #       #     # #     #  #  #     # #       #     #
#         # #   #       #       #     # #        #  #       #       #
#####      #    #       #####   ######  #        #   #####  #####    #####
#         # #   #       #       #   #   #        #        # #             #
#        #   #  #     # #       #    #  #     #  #  #     # #       #     #
####### #     #  #####  ####### #     #  #####  ###  #####  #######  #####

=====================================================================================================================
 */



// *  Encuentra la primera incidencia
// *  Given a array finde the first number that repeats and return it 

let question = [1, 2, 3, 4, 2, 3]
// ! Should return 2

let questionOne = [10, 2, 10, 3, 4, 2, 3, 5, 6, 7, 8, 9]
// !  Should reutrn 10

let noRepeat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  ! Should return undefined 

let courseExample1 = [2, 5, 1, 2, 3, 5, 1, 2, 4]
// ! Should return 2
let courseExample = [2, 1, 1, 2, 3, 5, 1, 2, 4]
// ! Should return 1


// ? Pseudocode
/*
* Iterar sobre el array
*  
*/


function findTheFirstRepeated(arra) {
    let result = [];
    let myCopy = [...arra];
    for (let i = 0; i < myCopy.length; i++) {
        if (!result.includes(myCopy[i])) {
            result.push(myCopy[i])
        } else if (result.includes(myCopy[i])) {
            console.log(myCopy[i], "Este es el numero que se repite primero")
            return
        }
    }
    console.log("U DEFINED")
}


function findTheFirstRepeatedOne(arra) {
    let result = [];
    let myCopy = [...arra];
    let number

    // * Loop the array 
    for (let i = 0; i < myCopy.length; i++) {
        // * If value is not included    ?    Push the value          : first repeated 
        !result.includes(myCopy[i]) ? result.push(myCopy[i]) : number = myCopy[i];
        console.log(result)
        if (number === Number) break
    }

    console.log(number)

}

findTheFirstRepeated([2, 5, 5, 2, 3, 5, 1, 2, 4])
// findTheFirstRepeated(noRepeat);
// findTheFirstRepeated(courseExample);
// findTheFirstRepeatedOne(courseExample);
// findTheFirstRepeated(courseExample1);


/*
   _____  ____  _     _    _ _______ _____ ____  _   _
  / ____|/ __ \| |   | |  | |__   __|_   _/ __ \| \ | |
 | (___ | |  | | |   | |  | |  | |    | || |  | |  \| |
  \___ \| |  | | |   | |  | |  | |    | || |  | | . ` |
  ____) | |__| | |___| |__| |  | |   _| || |__| | |\  |
 |_____/ \____/|______\____/   |_|  |_____\____/|_| \_|


*/


// * Space complexity O(1)
// * Big O -- O(n square)

function firstRecurringCharacter(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                return input[i];
            }
        }
    }
    return undefined
}



// * Space complexity
// * Big O

function firstRecurringCharacter2(input) {
    let map = {};
    for (let i = 0; i < input.length; i++) {
        if (map[input[i]] !== undefined) {
            return input[i]
        } else {
            map[input[i]] = i;
        }
    }
    return undefined
}

// firstRecurringCharacter2()


