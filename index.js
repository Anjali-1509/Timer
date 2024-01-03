let timerId;
let seconds = 0
let timerElem = document.getElementById("timer")


document.getElementById("startbtn").addEventListener("click", startTimer)
document.getElementById("pausebtn").addEventListener("click", pauseTimer)
document.getElementById("stopbtn").addEventListener("click", stopTimer)

function startTimer(){
 if(!timerId){
   timerId =setInterval(()=>{
    seconds++
    timerElem.innerText= seconds
   },1000)
 }
}

function pauseTimer(){
    if(timerId){
      clearInterval(timerId)  
      timerId= null
    }
}

function stopTimer(){
    if(timerId){
        clearInterval(timerId)
        timerId= null
    }

    seconds= 0
    timerElem.innerText= seconds
}


