class UFO {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = -(Math.random() * 0.05 + 0.01);
    this.obj = document.createElement("a-entity");
    this.obj.setAttribute("position", { x: x, y: y, z: z });
    scene.append(this.obj);
    
    

    let body = document.createElement("a-sphere");
    body.setAttribute("color", "#7CFC00");
    body.setAttribute("radius", 1);
    this.obj.append(body);

    let light = document.createElement("a-sphere");
    light.setAttribute("color", "#FFFFFF");
    light.setAttribute("radius", 0.1);
    light.setAttribute("position", { x: 0, y: 1.1, z: 0 });
    this.obj.append(light);

    let base = document.createElement("a-cylinder");
    base.setAttribute("color", "#808080");
    base.setAttribute("radius", 1.4);
    base.setAttribute("height", 0.2);
    base.setAttribute("position", { x: 0, y: -0.6, z: 0 });
    this.obj.append(base);

    let dome = document.createElement("a-hemisphere");
    dome.setAttribute("color", "#ADD8E6");
    dome.setAttribute("radius", 0.7);
    dome.setAttribute("position", { x: 0, y: 0.3, z: 0 });
    this.obj.append(dome);

    let antenna = document.createElement("a-cylinder");
    antenna.setAttribute("color", "#FFD700");
    antenna.setAttribute("radius", 0.05);
    antenna.setAttribute("height", 0.5);
    antenna.setAttribute("position", { x: 0, y: 1.3, z: 0 });
    this.obj.append(antenna);

    let tip = document.createElement("a-sphere");
    tip.setAttribute("color", "#FF4500");
    tip.setAttribute("radius", 0.1);
    tip.setAttribute("position", { x: 0, y: 1.55, z: 0 });
    this.obj.append(tip);

    let glow = document.createElement("a-ring");
    glow.setAttribute("color", "#00FFFF");
    glow.setAttribute("radius-inner", 1.5);
    glow.setAttribute("radius-outer", 2);
    glow.setAttribute("position", { x: 0, y: -0.7, z: 0 });
    glow.setAttribute("rotation", { x: -90, y: 0, z: 0 });
    this.obj.append(glow);

    let beam = document.createElement("a-cone");
    beam.setAttribute("color", "#FFFF00");
    beam.setAttribute("opacity", 0.5);
    beam.setAttribute("radius-bottom", 1);
    beam.setAttribute("radius-top", 0);
    beam.setAttribute("height", 5);
    beam.setAttribute("position", { x: 0, y: -3, z: 0 });
    this.obj.append(beam);

    



  }

  invade() {
    this.y += this.dy;
    if (this.y < 0) {
      this.y = 10;
    }
    this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
  }
}
