const date = new Date();
const currentDay = date.getDay();
document.getElementById("days").innerHTML = date.getDay();
document.getElementById("hours").innerHTML = date.getHours();
document.getElementById("minutes").innerHTML = date.getMinutes();
document.getElementById("seconds").innerHTML = date.getSeconds();