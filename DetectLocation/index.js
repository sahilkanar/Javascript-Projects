

function demo(){
    let location = navigator.geolocation.getCurrentPosition(onsuccess,onerror);
    
}

function onsuccess(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2C${longitude}&key={YOUR_API_KEY}`)
    .then(response => response.json()).then(result => document.getElementById('btn').innerText=`${result.results[0].components.country},${result.results[0].components.state},${result.results[0].components.road}`);
    }

function onerror(error){
    if(error.code==1){
        document.getElementById("btn").innerText='You denied the request';

    }
    if(error.code==2){
        document.getElementById("btn").innerText="Browser doesn't support this feature";

    }
    else{
        document.getElementById("btn").innerText='Something went wrong';
   
    }

}