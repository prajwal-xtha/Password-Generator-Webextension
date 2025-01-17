// Variable Decleration
const passRange = document.getElementById("passRange");
const upperCase = document.getElementById("upperCase");
const lowerCase = document.getElementById("lowerCase");
const numbers = document.getElementById("numbers");
const symbol = document.getElementById("symbol");
const passDisplay = document.getElementById("passwordDisplay");
const copy = document.getElementById("copyButton");
const generate = document.getElementById("generateButton");

const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChar = "abcdefghijklmnopqrstuvwxyz";
const numberChar = "1234567890";
const symbolChar = "!@#$%^&*()-_=+{}[]|:;',<.>/?";
let char;
let password;
let range;
let randNum;

function randNumGen(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function check() {
  char = "";
  if (upperCase.checked) {
    char += upperChar;
  }
  if (lowerCase.checked) {
    char = char + lowerChar;
  }
  if (numbers.checked) {
    char += numberChar;
  }
  if (symbol.checked) {
    char += symbolChar;
  }
  passGen();
}
check();
function passGen() {
  password = "";
  range = Number(passRange.value);
  for (let i = 0; i < range; i++) {
    randNum = randNumGen(0, char.length - 1);
    password += char[randNum];
  }
  passDisplay.value = "";
  passDisplay.value = password;
  console.log(password);
}

document.addEventListener("DOMContentLoaded", () => {
  generate.addEventListener("click", check);
  passRange.addEventListener("click", check);
});

copy.addEventListener("click", function () {
  passDisplay.select();
  navigator.clipboard.write(passDisplay.value);
});
