//CLOCK

let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");


setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    // digital clock
    let hours = document.querySelector("#hours");
    let minutes = document.querySelector("#minutes");
    let seconds = document.querySelector("#seconds");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    // adding zero before single digit number
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
})

//COUNTDOWN CLOCK

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
}
  
function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      daysSpan.style.color = "#2972ff";
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      hoursSpan.style.color = "#ff2972"
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      minutesSpan.style.color = "#fee800";
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
      secondsSpan.style.color = "#04fc43";
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}
  
function getNextSaturday() {
    var now = new Date();
    var nextSaturday = new Date();
    nextSaturday.setDate(now.getDate() + (6 - 1 - now.getDay() + 7) % 7 + 1);
    nextSaturday.setHours(00, 0, 0, 0);
    return nextSaturday;
}
  
function convertToGTM(date){
    estOffset = -3.0
    utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    return new Date(utc + (3600000 * estOffset));
}
  
var deadline = getNextSaturday();
initializeClock('clockdiv', convertToGTM(deadline));