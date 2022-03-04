//  *Regular definitions
const mutiply = (a, b) => a * b
//   ! Curryng
const curryMultiplier = (a) => (b) => a * b;
//  * Now holdMyCurryBruh 
const holdMyCurryBruh = curryMultiplier(5)

//  ? Now in case we want to call "Curry Multiplier" 
//  ? We can now only pass one parameter to holdMyCurryBruh()

//  ! EXAMPLE

let resultado = holdMyCurryBruh(4)
let resultadoOne = holdMyCurryBruh(6)
let resultadotwo = holdMyCurryBruh(20)
let resultadoTres = holdMyCurryBruh(1)

// 20
console.log(resultado)
// 30
console.log(resultadoOne)
// 100
console.log(resultadotwo)
// 5
console.log(resultadoTres)


