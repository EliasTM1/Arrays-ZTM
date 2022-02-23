//  ? Que es Scope?

/*
* Javascript is mainly function scoped: the most basic way to create a new scope is writting a function 
! Innes Scopes have access to outer scopes (SCOPE CHAIN)
? Each excecution cotnext has it own variable environment (variable scope)
* Variables and where can you acces them
* Scope in Js is lexical meaning that 
! The accesibility of this variables depends on where are physically declare in the code
? Dependiendo en donde estas variables esten disponibles, se vuelven disponibles o no para otras partes del programa
*
*/


// ? EXAMPLES 

// ! VAR

var myGlobalVar = "Mi nombre es elias";;

function outerFunc() {
    var fristLevel = "Este es el primer Scope que creamos";
    console.log(myGlobalVar, "Accedimos a una variable fuera de este function scope")

    function innerScope() {
        var innerScope = "Este es el nivel mas bajo"
        console.log(myGlobalVar)
        console.log(fristLevel)
    }
    innerScope();
    // ! This will give us a reference error since we can't acces variables on inner scopes
    // ! console.log(innerScope)
}



// ? EXAMPLES 
// ! LET & CONST
// * LET AND CONST ARE BLOCK SCOPES, instead of function scope

function letConst() {
    let letVar = "I was declared with LET";
    function innerFunc() {
        console.log(letVar);
        if (true) {
            const constante = "Any variable declare with let or const is block scoped"
            if (true) {
                console.log(constante, "Accediendo una variable de un scope padre")
            }
        }
    }
    innerFunc()
    // ! Reference error, ya que no podemos acceder scopes hijos
    // ? console.log(constante) 
};


letConst()