class LateralBarr extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <header class="Design">
        <span class="tooltiptext">Home</span>
        <a href="index.html">
            <span class="git"></span>
        </a>
    </header>

    <header class="Programming">
        <a href="git-blog.html">
            <span class="development"></span>
        </a>
    </header>

    <header class="Github">
        <a href="react-blog.html">
            <span class="github"></span>
        </a>
    </header>

    <header class="HTML">
        <a href="angular-blog.html">
            <span class="html"></span>
        </a>
    </header>

    <header class="CSS">
        <a href="javascript-blog.html">
            <span class="css"></span>
        </a>
    </header>

    <header class="Angular">
        <a href="development.html">
            <span class="angular"></span>
        </a>
    </header>

    <header class="React">
        <a href="design.html">
            <span class="react"></span>
        </a>
    </header>

    <header class="Test">
        <span class="test"></span>
    </header>

    <header class="Node">
        <span class="node"></span>
    </header>`;
    }
}
customElements.define('lateral-barr', LateralBarr);