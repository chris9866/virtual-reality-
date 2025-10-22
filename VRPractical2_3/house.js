class House {
    constructor(x, y, z) {
      this.obj = document.createElement("a-entity");

        let house1 = document.createElement('a-box');
        house1.setAttribute('position', {x: x, y: y + 1, z: z});
        house1.setAttribute('width', 2);
        house1.setAttribute('height', 2);
        house1.setAttribute('depth', 2);
        house1.setAttribute('color', '#8B4513');
        this.obj.append(house1);

        let roof = document.createElement('a-pyramid');
        roof.setAttribute('position', {x: x, y: y + 2.5, z: z});
        roof.setAttribute('width', 2.5);
      roof.setAttribute('height', 1.5);
      roof.setAttribute('depth', 2.5);
      roof.setAttribute('color', '#A52A2A');
      this.obj.append(roof);

      this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
    }
}
