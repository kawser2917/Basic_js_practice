let song = "Amr sonar bangla. Ami tomai valobashi"
let word = song.split(" ")
let letter = song.split("")
let sentence = song.split(".")
console.log(word)
console.log(letter)
console.log(sentence)

let partial = song.slice(0,4)
console.log(partial)

const joinSentence = sentence.join(". ")
console.log(joinSentence)