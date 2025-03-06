const parentElement = document.querySelector(".parent");
const emailInput = document.querySelector("#emailInput");
const subscribeButton = document.querySelector("#subscribeButton");
const messageElement = document.querySelector(".message");
const emailText = document.querySelector(".emailText");
const dismissButton = document.querySelector("#dismissButton");

function subscribe() {
    emailInput.classList.remove("error");
    parentElement.classList.add("none");
    messageElement.classList.add("flex");
    emailText.innerHTML = emailInput.value;
}

function inputError() {
    emailInput.classList.add("error");
}

emailInput.addEventListener("focus", () => {
    emailInput.classList.remove("error");
})

subscribeButton.addEventListener("click", () => {
    if(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/.test(emailInput.value)) {
        subscribe();
        
    } else {
        inputError();
    }
});

dismissButton.addEventListener("click" , () => {
    parentElement.classList.remove("none");
    messageElement.classList.remove("flex");
})