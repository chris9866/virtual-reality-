let scence;
let car;

window.addEventListener("DOMContentLoaded",function() {
     scence = document.querySelector("a-scene");
        car = document.querySelector("#car");
        car.a = 0;
        car.da =-0.1;

        loop();
}) 
function loop(){    
    car.a += car.da;
    car.setAttribute("position",{x:car.a,y:0,z:0});
    requestAnimationFrame(loop);    
    windowr.requestAnimationFrame(loop);
}




    



    

