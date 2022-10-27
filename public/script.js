"use strict";

const range = document.getElementById("passwordLength");
const rangeTooltip = document.getElementById("rangeValue");

const uppercaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowercaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacters = [
  '"',
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "{",
  "|",
  "}",
  "~",
  ",",
];
const uppercaseFilter = document.getElementById("uppercaseFilter");
const lowercaseFilter = document.getElementById("lowercaseFilter");
const numbersFilter = document.getElementById("numbersFilter");
const symbolsFilter = document.getElementById("symbolsFilter");

const getRandomInt = (length) => {
  return Math.floor(Math.random() * length);
};

const getRandomCharacter = (charSet) => {
  return charSet[getRandomInt(charSet.length)];
};

const validateCharacter = (character, prevCharacter) => {
  if (character === prevCharacter) return true;
  if (isNaN(parseInt(character)) || isNaN(parseInt(prevCharacter)))
    return false;
  else {
    return parseInt(prevCharacter) + 1 === parseInt(character);
  }
};

const setTooltip = () => {
  const tooltipValue = Number(
    ((range.value - range.min) * 100) / (range.max - range.min)
  );
  const tooltipPosition = 10 - tooltipValue * 0.2;
  rangeTooltip.innerHTML = range.value;
  rangeTooltip.style.left = `calc(${tooltipValue}% + ${tooltipPosition}px - 25px)`;
};

window.addEventListener("load", () => {
  setTooltip();
  generatePassword();
});

range.addEventListener("input", setTooltip);

const generatePassword = () => {
  let characterSet = [];
  const passwordText = [];
  const password = document.getElementById("password");
  if (uppercaseFilter.checked)
    characterSet = characterSet.concat(uppercaseCharacters);
  if (lowercaseFilter.checked)
    characterSet = characterSet.concat(lowercaseCharacters);
  if (numbersFilter.checked)
    characterSet = characterSet.concat(numberCharacters);
  if (symbolsFilter.checked)
    characterSet = characterSet.concat(specialCharacters);
  let i = 0;
  if (characterSet.length) {
    while (i < parseInt(range.value)) {
      let char = getRandomCharacter(characterSet);
      if (i !== 0) {
        while (validateCharacter(char, passwordText[i - 1])) {
          char = getRandomCharacter(characterSet);
        }
      }
      passwordText.push(char);
      i++;
    }
    password.value = passwordText.join("");
    calculatePasswordStrength();
  } else {
    password.value = "";
  }
};

const copyPassword = () => {
  const password = document.getElementById("password");
  password.select();
  navigator.clipboard.writeText(password.value);
};

const calculatePasswordStrength = () => {
  let passwordStrength = 0;
  const passwordStrengthText = document.getElementById("passwordStrengthText");
  const body = document.getElementById("passwordGeneratorBody");
  if (uppercaseFilter.checked) passwordStrength += 15;
  if (lowercaseFilter.checked) passwordStrength += 15;
  if (numbersFilter.checked) passwordStrength += 15;
  if (symbolsFilter.checked) passwordStrength += 15;
  if (range.value >= 8) passwordStrength += 10;
  if (range.value > 14) passwordStrength += 10;
  if (range.value > 20) passwordStrength += 10;
  if (range.value > 26) passwordStrength += 10;
  console.log(passwordStrength);
  if (passwordStrength > 75) {
    passwordStrengthText.innerText = "Very Strong";
    body.style.background = "#066025";
  } else if (passwordStrength > 55 && passwordStrength <= 75) {
    passwordStrengthText.innerText = "Strong";
    body.style.background = "#058c42";
  } else if (passwordStrength > 40 && passwordStrength <= 55) {
    passwordStrengthText.innerText = "Weak";
    body.style.background = "#ED5145";
  } else {
    passwordStrengthText.innerText = "Very Weak";
    body.style.background = "#d62828";
  }
};
