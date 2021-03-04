class MasterComponent extends HTMLElement {
    constructor() {
        super();
    }
    conecctedCallback() {
        this.innerHTML = `
        
        `
    }
}
customElements.define('master-component', MasterComponent);