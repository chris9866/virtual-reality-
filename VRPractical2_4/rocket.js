class Rocket {
      constructor(x, y, z) {
        // Store y position and movement speed
        this.y = y;
        this.dy = Math.random() * 0.05 + 0.02; // Random upward speed
        
        // Create container entity
        this.obj = document.createElement("a-entity");
        
        // Rocket body (main cylinder)
        let body = document.createElement("a-cylinder");
        body.setAttribute("color", "#0000");
        body.setAttribute("height", 3);
        body.setAttribute("radius", 0.5);
        body.setAttribute("position", {x: 0, y: 1, z: 0});
        this.obj.append(body);

        let ring= document.createElement("a-cone");
        ring.setAttribute("color", "#FFBF00");
        ring.setAttribute("radius", 0.35);
        ring.setAttribute("tube", 0.05);
        ring.setAttribute("position", {x: 0, y: 0, z: 0});
        ring.setAttribute("rotation", {x:90, y:0, z:0});
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
         smoke.setAttribute("opacity", 0.5);
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