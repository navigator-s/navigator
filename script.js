document.getElementById('slider-left').onclick = sliderLeft;
document.getElementById('slider-right').onclick = sliderRight;
var left = 0;


function sliderLeft() {
    var polosa = document.getElementById('polosa');
    left = left - 18;
    if (left < - 144) {
        left = 0;
    }
    polosa.style.left = left + 'em';  
}

function sliderRight () {
    var polosa = document.getElementById('polosa');
    left = left + 18;
    if (left > 18) {
        left = -126;
    }
    polosa.style.left = left + 'em'; 
}