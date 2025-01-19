const passRange = document.getElementById("passRange");
const upperCase = document.getElementById("upperCase");
const lowerCase = document.getElementById("lowerCase");
const numbers = document.getElementById("numbers");
const symbol = document.getElementById("symbol");
const passDisplay = document.getElementById("passwordDisplay");
const passLength = document.getElementById("passLength");
const copy = document.getElementById("copyButton");
const generate = document.getElementById("generateButton");

const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChar = "abcdefghijklmnopqrstuvwxyz";
const numberChar = "1234567890";
const symbolChar = "!@#$%^&*()-_=+{}[]|:;',<.>/?";
let char , password,range,randNum;

//for alert
const modalElement = document.querySelector("#default-modal");
const warningModal = new Modal(modalElement);

//when copied
const copied = document.querySelector("#copied-modal");
const copiedmodal = new Modal(copied);

//
var randNumGen =  (min, max) =>  Math.floor(Math.random() * (max - min + 1)) + min;

function check() {
  char = "";
  passRange.disabled = false;
  if (upperCase.checked) char += upperChar;
  if (lowerCase.checked) char = char + lowerChar;
  if (numbers.checked) char += numberChar;
  if (symbol.checked) char += symbolChar;
  
  if (!symbol.checked  &&!numbers.checked  &&!lowerCase.checked  && !upperCase.checked ) {
    warningModal.show();
    passRange.disabled = true;
    return;
  }
  passGen();
}
function passGen() {
  password = "";
  range = Number(passRange.value);
  for (let i = 0; i < range; i++) {
    randNum = randNumGen(0, char.length - 1);
    password += char[randNum];
  }
  passDisplay.value = "";
  passDisplay.value = password;
}

document.addEventListener("DOMContentLoaded", () => {
  check()
  generate.addEventListener("click", check);
  passRange.addEventListener("click", check);
});

copy.addEventListener("click", function () {
  copiedmodal.show()
  passDisplay.select();
  navigator.clipboard.writeText(passDisplay.value);
  document.querySelector('#pass').textContent = ` Copied to Clipboard: ${passDisplay.value}`
  setTimeout(() => copiedmodal.hide(), 400);
});

passRange.addEventListener("input", function () {
  passLength.textContent = passRange.value;
});