const lyrics = "Sada Sada kala kala rong jomeche sada kala"

let searchString  = "sAda"
let searchStringLower = searchString.toLowerCase()
let stringLower = lyrics.toLowerCase()

let doesExist = stringLower.includes(searchStringLower)
let doesExistInOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase())
console.log(doesExist)
console.log(doesExistInOneLine)

let positionOfString = lyrics.indexOf("rong")
console.log(positionOfString)

let beginingCheck = lyrics.toLowerCase().startsWith("sada")

console.log(beginingCheck)
// Endswith normally used for checking file 