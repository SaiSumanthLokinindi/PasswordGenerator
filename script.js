const range = document.getElementById('passwordLength');
const rangeTooltip = document.getElementById('rangeValue');
range.value = 12;

const uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numberCharacters = ["0","1","2","3","4","5","6","7","8","9"];
const specialCharacters = ["\"","!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}","~"];

const setTooltip = ()=>{
    const tooltipValue = Number(((range.value - range.min)*100)/(range.max-range.min));
    const tooltipPosition = 10 - (tooltipValue * 0.2);
    rangeTooltip.innerHTML = range.value;
    rangeTooltip.style.left = `calc(${tooltipValue}% + ${tooltipPosition}px - 25px)`;
}

document.addEventListener("DOMContentLoaded", setTooltip);

range.addEventListener("input",setTooltip);


const generatePassword = ()=>{
    const uppercaseFilter = document.getElementById('uppercaseFilter');
    const lowercaseFilter = document.getElementById('lowercaseFilter');
    const numbersFilter = document.getElementById('numbersFilter');
    const symbolsFilter = document.getElementById('symbolsFilter');
    const characterSet = [];
    if(uppercaseFilter.checked) characterSet += uppercaseFilter;
    if(lowercaseFilter.checked) characterSet += lowercaseFilter;
    if(numbersFilter.checked) characterSet += numbersFilter;
    if(symbolsFilter.checked) characterSet += symbolsFilter;

}

const str = `"!#$%&'()*+,-./:;<=>?@[]^_{|}~`;

console.log(str.split(""));