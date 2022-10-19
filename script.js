"use strict"

const range = document.getElementById('passwordLength');
const rangeTooltip = document.getElementById('rangeValue');

const uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numberCharacters = ["0","1","2","3","4","5","6","7","8","9"];
const specialCharacters = ["\"","!","#","$","%","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}","~",","];
const uppercaseFilter = document.getElementById('uppercaseFilter');
const lowercaseFilter = document.getElementById('lowercaseFilter');
const numbersFilter = document.getElementById('numbersFilter');
const symbolsFilter = document.getElementById('symbolsFilter');
const password = document.getElementById('password');

const getRandomInt = (length)=>{
    return Math.floor(Math.random() * (length));
}

const getRandomCharacter = (charSet)=>{
    return charSet[getRandomInt(charSet.length)];
}

const validateCharacter = (character, prevCharacter)=>{
    if(character===prevCharacter) return true;
    if(isNaN(parseInt(character)) || isNaN(parseInt(prevCharacter))) return false;
    else{
        return parseInt(prevCharacter) + 1 === parseInt(character);
    }
}

const setTooltip = ()=>{
    const tooltipValue = Number(((range.value - range.min)*100)/(range.max-range.min));
    const tooltipPosition = 10 - (tooltipValue * 0.2);
    rangeTooltip.innerHTML = range.value;
    rangeTooltip.style.left = `calc(${tooltipValue}% + ${tooltipPosition}px - 25px)`;
}

document.addEventListener("DOMContentLoaded", ()=>{
    setTooltip();
    generatePassword();
});

range.addEventListener("input",setTooltip);


const generatePassword = ()=>{
    let characterSet = [];
    const passwordText = [];
    if(uppercaseFilter.checked) characterSet = characterSet.concat(uppercaseCharacters);
    if(lowercaseFilter.checked) characterSet = characterSet.concat(lowercaseCharacters);
    if(numbersFilter.checked) characterSet = characterSet.concat(numberCharacters);
    if(symbolsFilter.checked) characterSet = characterSet.concat(specialCharacters);
    let i=0;
    if(characterSet.length){
        while(i<parseInt(range.value)){
            let char = getRandomCharacter(characterSet);
            console.log(char);
            if(i!==0){
                while(validateCharacter(char,passwordText[i-1])){
                    char = getRandomCharacter(characterSet);
                }
            }
            passwordText.push(char);
            i++;
        }
        console.log(passwordText);
        password.innerText = passwordText.join('');
        
    }
    else password.innerText = "";
}