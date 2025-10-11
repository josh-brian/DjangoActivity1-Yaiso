console.log("Javascript here");

document.addEventListener("DOMContentLoaded", function () {
    const greeting = document.getElementById("greeting");

    if (greeting) {
        const userName = prompt("Hi there! What’s your name?");
        if (userName && userName.trim() !== "") {
            greeting.textContent = `Hello, ${userName}! `;
        } else {
            greeting.textContent = "Hello there! ";
        }
    }
});
