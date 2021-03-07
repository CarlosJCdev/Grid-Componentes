class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" href="/style/style.css">
        <footer id="contact" class="contact-section">
        <div class="info-contact">
            <h2>Contact me rigth now!!</h2>
            <a href="mailto: ing.jcarlosmg@gmail.com" id="email">Engineer | Juan Carlos Mendoza García</a>
        </div>

        <div class="info-links">
            <span class="social-git"></span>
            <a href="https://github.com/CarlosJCdev" target="_blank">GitHub</a>
            <span class="social-link"></span>
            <a href="https://www.linkedin.com/in/juan-carlos-mendoza-garc%C3%ADa-b279bb122/" target="_blank">Linkedin</a>
        </div>
        <div class="info-Social-Network">
            <ul>
                <li><a>Software</a></li>
                <li><a>Design UI/UX</a></li>
                <li><a>Web-Mobil-Desktop</a></li>
            </ul>
            <ul>
                <li> <span class="copy">Copyright 2021</span></li>
                <li> <span class="flag"></span></li>
            </ul>
        </div>
        </footer>
        `;
    }
}
customElements.define('my-footer', Footer);