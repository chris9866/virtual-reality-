class wall extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <a-box position="0 1.5 -3" rotation="0 45 0" color="#4CC3D9" depth="0.1" height="3" width="3"></a-box>
    `;