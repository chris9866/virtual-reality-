class UFO {
  constructor(x, y, z) {
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



  }

  invade() {
    let pos = this.obj.getAttribute("position");
    pos.y += Math.sin(Date.now() * 0.001) * 0.01;
    this.obj.setAttribute("position", pos);
  }
}
