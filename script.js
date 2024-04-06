const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");
const resetBtn = document.querySelector(".resetBtn");

let milli = 0;
let sec = 0;
let min = 0;
let hrs = 0;

let intervalTimer;

function updateTime() {
  milli++;
  if (milli == 100) {
    sec++;
    milli = 0;
  }
  if (sec == 60) {
    min++;
    sec = 0;
  }
  if (min == 60) {
    hrs++;
    min = 0;
  }
  let getMilli = milli < 10 ? "0" + milli : milli;
  let getSec = sec < 10 ? "0" + sec : sec;
  let getMin = min < 10 ? "0" + min : min;
  let getHrs = hrs < 10 ? "0" + hrs : hrs;

  document.getElementById("milli").textContent = getMilli;
  document.getElementById("sec").textContent = getSec;
  document.getElementById("min").textContent = getMin;
  document.getElementById("hrs").textContent = getHrs;
}

startBtn.addEventListener("click", function () {
  intervalTimer = setInterval(updateTime, 10);
});
stopBtn.addEventListener("click", function () {
  clearInterval(intervalTimer);
});
resetBtn.addEventListener("click", function () {
  milli = sec = min = hrs = 0;
  updateTime();
});
