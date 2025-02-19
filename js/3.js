let userName = prompt("Please enter your name", "ADMIN");
let message = (userName === "ADMIN") ? "Hello administrator": "Access is restricted! Contact your system administrator";
alert(message);