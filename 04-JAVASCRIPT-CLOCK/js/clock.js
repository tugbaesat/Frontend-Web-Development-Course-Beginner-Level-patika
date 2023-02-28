let userName = prompt("What is your name?").toUpperCase();
document.querySelector("#myName").innerHTML = userName;

function showTime(){
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday"];
    const today = new Date();
    let day = days[today.getDay()];
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let currentTime = document.querySelector("#myClock")
    currentTime.innerHTML = `${hours}:${minutes}:${seconds} ${day}`;
}

showTime();
setInterval(showTime, 1000);