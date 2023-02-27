const inputBtn = document.querySelector('#input-btn')
const convertBtn = document.querySelector("#convert-btn")
const conversion1 = document.querySelector("#conversion1")
const conversion2 = document.querySelector("#conversion2")
const conversion3 = document.querySelector("#conversion3")

convertBtn.addEventListener("click", function() {
    const value = inputBtn.value

    conversion1.textContent = ` ${value} meters = ${(value * 3.281).toFixed(3)} feet | ${value} feet = ${(value * (1/3.281)).toFixed(3)} meters `

    conversion2.textContent = ` ${value} liters = ${(value * 0.264).toFixed(3)} gallons | ${value} gallons = ${(value * (1/0.264)).toFixed(3)} liters `

    conversion3.textContent = ` ${value} kilos = ${(value * 2.204).toFixed(3)} pounds | ${value} pounds = ${(value * (1/2.204)).toFixed(3)} kilos `
})


inputBtn.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event

function resizeInput() {
  this.style.width = this.value.length + 1 + "ch";
}