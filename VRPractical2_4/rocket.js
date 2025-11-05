class Rocket {
      constructor(x, y, z) {
        this.x = x;
        this.z = z;
        this.y = y;
        this.dy = Math.random() * 0.05 + 0.02; 
        
        
        this.obj = document.createElement("a-entity");
        
       
        let body = document.createElement("a-cylinder");
        body.setAttribute("color", "#0000");
        body.setAttribute("height", 3);
        body.setAttribute("radius", 0.5);
        body.setAttribute("position", {x: 0, y: 1, z: 0});
        this.obj.append(body);

        let missile= document.createElement("a-cylinder");
        missile.setAttribute("color", "#FF0000");
        missile.setAttribute("height", 2);
        missile.setAttribute("radius", 0.2);
        missile.setAttribute("position", {x: 0, y: 0.5, z: 0.6});
        this.obj.append(missile);

        let booster= document.createElement("a-cylinder");
        booster.setAttribute("color", "#808080");
        booster.setAttribute("height", 1);
        booster.setAttribute("radius", 0.3);
        booster.setAttribute("position", {x: 0, y: -0.5, z: 0});
        this.obj.append(booster);

        let flame= document.createElement("a-cone");;
        flame.setAttribute("color", "#FFA500");
        flame.setAttribute("height", 1);
        flame.setAttribute("radius-bottom", 0.3);
        flame.setAttribute("radius-top", 0);
        flame.setAttribute("position", {x: 0, y: -1, z: 0});
        this.obj.append(flame);

        let exhaust= document.createElement("a-cylinder");
        exhaust.setAttribute("color", "#FFFF00");
        exhaust.setAttribute("height", 0.5);
        exhaust.setAttribute("radius", 0.15);
        exhaust.setAttribute("position", {x: 0, y: -1.5, z: 0});
        this.obj.append(exhaust);

        let ladder= document.createElement("a-box");
        ladder.setAttribute("color", "#8B4513");
        ladder.setAttribute("height", 2);
        ladder.setAttribute("width", 0.1);
        ladder.setAttribute("depth", 0.1);
        ladder.setAttribute("position", {x: 0.4, y: 1, z: 0});
        this.obj.append(ladder);

        let antenna= document.createElement("a-cylinder");
        antenna.setAttribute("color", "#000000");
        antenna.setAttribute("height", 1);
        antenna.setAttribute("radius", 0.05);
        antenna.setAttribute("position", {x: 0, y: 4, z: 0});
        this.obj.append(antenna);

        let bulb= document.createElement("a-sphere");
        bulb.setAttribute("color", "#FFFF00");
        bulb.setAttribute("radius", 0.1);
        bulb.setAttribute("position", {x: 0, y: 4.6, z: 0});
        this.obj.append(bulb);

        let light= document.createElement("a-sphere");;
        light.setAttribute("color", "#FFFFFF");
        light.setAttribute("radius", 0.05);
        light.setAttribute("position", {x: 0, y: 4.8, z: 0});
        this.obj.append(light);
  

        let missileTip= document.createElement("a-cone");
        missileTip.setAttribute("color", "#FF0000");
        missileTip.setAttribute("height", 0.4);
        missileTip.setAttribute("radius-bottom", 0.2);
        missileTip.setAttribute("radius-top", 0);
        missileTip.setAttribute("position", {x: 0, y: 1.5, z: 0.6});
        this.obj.append(missileTip);

        let door= document.createElement("a-box"); 
        door.setAttribute("color", "#654321");
        door.setAttribute("height", 1);
        door.setAttribute("width", 0.4);
        door.setAttribute("depth", 0.05);
        door.setAttribute("position", {x: 0, y: 0.5, z: 0.21});
        this.obj.append(door);

        let dish= document.createElement("a-sphere");
        dish.setAttribute("color", "#C0C0C0");
        dish.setAttribute("radius", 0.2);
        dish.setAttribute("position", {x: 0, y: 4.3, z: 0});
        this.obj.append(dish);

        let ring= document.createElement("a-cone");
        ring.setAttribute("color", "#FFBF00");
        ring.setAttribute("radius", 0.35);
        ring.setAttribute("tube", 0.05);
        ring.setAttribute("position", {x: 0, y: 0, z: 0});
        ring.setAttribute("rotation", {x:0, y:0, z:0});
        ring.setAttribute("opacity", 0.8);
        this.obj.append(ring);

        

         
        let windows= document.createElement("a-cylinder");
        windows.setAttribute("color", "#87CEEB");
        windows.setAttribute("height", 1);
        windows.setAttribute("radius", 0.2);
        windows.setAttribute("position", {x: 0, y: 1.5, z: 0.45});
        windows.setAttribute("rotation", {x:0, y:0, z:0});
        windows.setAttribute("opacity", 0.9);
        this.obj.append(windows);
        


        let cone= document.createElement("a-cone");
        cone.setAttribute("color", "	#FF0000");
        cone.setAttribute("height", 1);
        cone.setAttribute("radius-bottom", 0.5);
        cone.setAttribute("radius-top", 0);
        cone.setAttribute("position", {x: 0, y: 3, z: 0});
        this.obj.append(cone);

        for(let i=0; i<4; i++) {
          let fin=document.createElement("a-cone");
          fin.setAttribute("color", "	#0000");
          fin.setAttribute("height", 0.3);
          fin.setAttribute("width", 0.3);
          fin.setAttribute("depth", 0.05);
          fin.setAttribute("position", {x:0, y:3.5, z:0})
          fin.setAttribute("rotation", {x:0, y:i*90, z:0})
          fin.setAttribute("opacity", 0.4);
          this.obj.append(fin);
        }
        for (let i=0; i<3; i++) {
          let smoke= document.createElement("a-cone");
          smoke.setAttribute("color", "#E5E4E2");
          smoke.setAttribute("height", 4);
          smoke.setAttribute("radius-bottom", 0.5);
          smoke.setAttribute("radius-top", 0);
         smoke.setAttribute("opacity", 0.2);
          smoke.setAttribute("position", {x: 0, y: -0.5, z: 0});
          this.obj.append(smoke);


          

        }


        this.obj.setAttribute("position", {x: x, y: y, z: z});
        scene.append(this.obj);
      }

      launch() {
        this.y+=this.dy;
        this.obj.setAttribute("position", {x: this.obj.getAttribute("position").x, y: this.y, z: this.obj.getAttribute("position").z});
    
      }
      spin() {
        let rot = this.obj.getAttribute("rotation");
        rot.y += 6;
        this.obj.setAttribute("rotation", rot);
      }
      }

      
     