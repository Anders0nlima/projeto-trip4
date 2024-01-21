let count = 1;
document.getElementById('radio1').checked = true;


function nextImage(){
    count++
    if(count>5){
        count = 1;
    }

    document.getElementById('radio'+count).checked = true;
}

setInterval(function(){
    nextImage()
}, 5000)
