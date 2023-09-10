var start = document.getElementById('start');
var reset = document.getElementById('reset');
var stop = document.getElementById('stop');
var restart = document.getElementById('restart');


var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("sec");

//store a reference to the startTimer variable
var startTimer = null;
var restarthour=null;
var restartmint=null;
var restartsec=null;


start.addEventListener('click', function(){
    //initialize the variable
    function startInterval(){
        restarthour=h.value;
        restartmint=m.value;
        restartsec=s.value;
        start.classList.add("unactive");
        stop.classList.remove("unactive");
        startTimer = setInterval(function() {
            timer();
        }, 1000);
    }
    startInterval();
})

reset.addEventListener('click', function(){
    h.value = 0;
    m.value = 0;
    s.value = 0;
    start.classList.remove("unactive");
    stop.classList.add("unactive");
    //stop the timer after pressing "reset"
    stopInterval()
})

stop.addEventListener('click',function(){
    start.classList.remove("unactive");
    stop.classList.add("unactive");
    stopInterval();
})

restart.addEventListener('click',function(){
    h.value=restarthour;
    m.value=restartmint;
    s.value=restartsec;
})

function timer(){
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value = 0;
    } else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    } else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
    }
    return;
}

//stop the function after pressing the reset button, 
//so the time wont go down when selecting a new time after pressing reset
function stopInterval() {
    clearInterval(startTimer);
}