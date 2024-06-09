
 hourhand = document.querySelector(".hour");
 minutehand = document.querySelector(".minute");
secondshand = document.querySelector(".seconds");

function rotatesec(){

    secondshand.style.transform+=`rotate(6deg)`;
    

}
setInterval(rotatesec,1000);
function rotatemin(){

    minutehand.style.transform+=`rotate(6deg)`;
    

}

setInterval(rotatemin,60000);

function rotatehour(){

    hourhand.style.transform+=`rotate(2.5deg)`;
    

}
setInterval(rotatehour,300000);