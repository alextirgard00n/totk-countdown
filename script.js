const daysEl = document.querySelector(".days");
const hoursEl = document.querySelector(".hours");
const minsEl = document.querySelector(".mins");
const secondsEl = document.querySelector(".seconds");


let countDownDate = new Date("May 12, 2023").getTime();

// Update the count down every 1 second
function countdown() {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.innerText = days;
    hoursEl.innerText = hours;
    minsEl.innerText = minutes;
    secondsEl.innerText = seconds;
};

countdown();
setInterval(countdown, 1000);