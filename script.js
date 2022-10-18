const range = document.getElementById('passwordLength');
const rangeTooltip = document.getElementById('rangeValue');


const setTooltip = ()=>{
    const tooltipValue = Number(((range.value - range.min)*100)/(range.max-range.min));
    const tooltipPosition = 10 - (tooltipValue * 0.2);
    rangeTooltip.innerHTML = range.value;
    rangeTooltip.style.left = `calc(${tooltipValue}% + ${tooltipPosition}px - 25px)`;
}

document.addEventListener("DOMContentLoaded", setTooltip);

range.addEventListener("input",setTooltip);