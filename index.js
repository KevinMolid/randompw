let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let includeSymbols = false
let pwLength = 15

let pw1El = document.getElementById("pw1-el")
let pw2El = document.getElementById("pw2-el")

function setCharacters() {
  if (includeSymbols === false) {
    characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
    "t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
    "$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"]
    includeSymbols = true
  } else {
    characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
    "t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    includeSymbols = false
  }
}

function randomCharacter() {
  let i = Math.floor( Math.random() * characters.length )
  return characters[i]
}

function generatePasswords() {
  // Password 1
  let pw1 = ""
  for (let i = 0; i < pwLength; i++) {
    pw1 += randomCharacter()
  pw1El.textContent = pw1
  }
  // Password 2
  let pw2 = ""
  for (let i = 0; i < pwLength; i++) {
    pw2 += randomCharacter()
  pw2El.textContent = pw2
  }
}