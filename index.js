const deadline = "10 jan 2030"
function countdown(){
    const deadlineDate = new Date(deadline);
    const currentDate = new Date();
    const totalSeconds = (deadlineDate - currentDate)/1000;
    const days = formatTime(Math.floor(totalSeconds/3600/24));
    const hours = formatTime(Math.floor(totalSeconds/3600) % 24);
    const minutes = formatTime(Math.floor(totalSeconds/60) % 60);
    const seconds = formatTime(Math.floor(totalSeconds%60));
    document.querySelector("#days").innerHTML = days
    document.querySelector("#hours").innerHTML = hours
    document.querySelector("#minutes").innerHTML = minutes
    document.querySelector("#seconds").innerHTML = seconds
}
function formatTime(time){
    if (time<10){
        time = "0" + time
        
    }
    return time;
}
// intial call
countdown();
setInterval(countdown, 1000);