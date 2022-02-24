function isMakeFirstString(strings, toMatch) {
    let uppercased = strings.toUpperCase().split('')
    let toArray = strings.split('')

    let noRepeated = cleaner(toArray);
    let noRepeatUpperCased = cleaner(uppercased)

    if (noRepeated.includes())

        console.log(noRepeated)
    console.log(noRepeatUpperCased)


}


function cleaner(array) {
    let noRepeated = [];
    for (let i = 0; i < array.length; i++) {
        if (!noRepeated.includes(array[i])) {
            noRepeated.push(array[i])
        }
    }
    return noRepeated
}

function giveMeTheCodes(alphabet) {
    let stringAlph = alphabet
    console.log(stringAlph)
    for (let i = 0; i < alphabet.length; i++) {
        console.log(stringAlph.charCodeAt(i))
    }
}

// lowercase range === 97 to 122
// giveMeTheCodes('abcdefghijklmnopqrstuvwxyz')

isMakeFirstString("ebCde", "BCD")


// I can turn letters into uppercase
// Whats the charcode of lowercase