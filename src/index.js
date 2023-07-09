const mainContainer = document.querySelector(".main-container")
const thankYou = document.querySelector(".thank-you")
const yourRate = document.querySelector("#your-rate")
const submitButton = document.querySelector(".submit-btn")
const rateButtons = document.querySelectorAll(".rate-btn")

submitButton.addEventListener('click', () => {
    mainContainer.style.display = "none"
    thankYou.style.display = "flex"
})

rateButtons.forEach((button) => {
    button.addEventListener('click', () => {
        yourRate.innerHTML = button.innerHTML
    })
})


