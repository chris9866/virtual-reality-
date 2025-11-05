let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;
let ufo = [];
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

rocket = new Rocket(rnd(-10,10), 0, rnd(-5,10)); 
for ( let x=0; x<20; x++){
  let xPos = rnd(-20,20);
  let yPos = rnd(1,10);
  let zPos = rnd(-20,20);

  ufo.push( new UFO(xPos, yPos, zPos) );
}



  loop();
})

function loop(){
  rocket.launch();
  rocket.spin();

for( let i=0; i<ufo.length; i++){
  ufo[i].invade();
}





  
  window.requestAnimationFrame( loop );
}
