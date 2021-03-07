class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <header class="menu">
        <nav class="menu-content">
            <h2 class="title"><strong class="jc">JC</strong><span class="dev">dev</span></h2>
        </nav>
        </header>`;
    }
}
customElements.define('main-header', Header);