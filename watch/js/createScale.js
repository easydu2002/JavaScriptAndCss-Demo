window.onload = function () {
    box = document.getElementById('watch-border');

    for(var i=0;i<60;i++) {
        addScale();
    }
}

var box ;
var deg = 0;


function addScale() {
    var scale = document.createElement('div');
    scale.setAttribute('class','scale');
    box.appendChild(scale);
    scale.style.transform = "translate(-50%,0%) rotate(" + deg + "deg)";
    if(deg % 30 == 0) {
        scale.style.border = "4px solid #000";
    }
    deg += 6;
    
}
