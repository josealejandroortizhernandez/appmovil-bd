customElements.define("mi-footer", class extends HTMLElement {
  connectedCallback() {
    this.innerText = "Derechos Reservados &copy; 2019 Jose Alejandro Ortiz Hernandez  IC-51";
  }
}, { extends: "footer" });