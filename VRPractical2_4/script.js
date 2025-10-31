let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

rocket = new Rocket(0,0);
ufo1 = new UFO(rnd(-10,10), rnd(1,10), rnd(-5,10));


  loop();
})

function loop(){
  rocket.launch();
  rocket.spin();



  





  
  window.requestAnimationFrame( loop );
}
