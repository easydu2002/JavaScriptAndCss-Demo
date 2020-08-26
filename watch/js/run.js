
var date = new Date();
var hour = 0;
var minute = 0;
var second = 0;
var hourPointer = document.getElementsByClassName('hour');
var minutePointer = document.getElementsByClassName('minute');
var secondPointer = document.getElementsByClassName('second');
var time = document.getElementById('time');
function flush() {
    date = new Date();
    hour = Math.floor(date.getHours()-12);
    minute = date.getMinutes();
    second = date.getSeconds();
    // time.innerHTML = date.getDate();
    document.getElementById('time').innerHTML = date;
}

function run() {
    flush();
    setPointer();
}

setInterval('run()',1000);

function setPointer() {
    secondPointer[0].style.transform = "translate(-50%,-100%) rotate(" + second*6 + "deg)";
    minutePointer[0].style.transform = "translate(-50%,-100%) rotate(" + minute*6 + "deg)";
    hourPointer[0].style.transform = "translate(-50%,-100%) rotate(" + hour*30 + "deg)";
}