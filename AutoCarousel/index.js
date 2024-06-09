
 imageindex=1;
 images  = document.querySelectorAll('img'); 
 carousel = document.querySelector('.image-container')

function demo(){
    carousel.style.transform =`translate(-${imageindex*100}%)`;
    imageindex++;
    if(imageindex>=images.length){
        imageindex=0;
    }
}
setInterval(demo,3000);
