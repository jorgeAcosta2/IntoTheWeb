/*jslint browser: true*/
/*global $, jQuery*/

//Radius tool for selector/mouse in canvas

var setRadius = function(newRadius){
    if(newRadius < minRad){
        newRadius = minRad;
    }else if(newRadius > maxRad){
        newRadius = maxRad;
    }
    radius = newRadius;
    ctx.lineWidth = radius * 2;
    
    radSpan.innerHTML = radius;
}

var minRad = 5,
    maxRad = 100,
    defaultRad = 20,
    interval = 5,
    radSpan = document.getElementById('radval'),
    decRad = document.getElementById('decRad'),
    incRad = document.getElementById('incRad');

decRad.addEventListener('click', function(){
   setRadius(radius - interval);
});

incRad.addEventListener('click',function(){
    setRadius(radius + interval);
});

setRadius(defaultRad);
