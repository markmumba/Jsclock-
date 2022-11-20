let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let button = document.querySelector('button');




function setTime (){

    const now = new Date();

    hours.innerHTML = now.getHours();
    minutes.innerHTML = now.getMinutes();
    seconds.innerHTML = now.getSeconds();

}

setInterval(setTime,1000);
