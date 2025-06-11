class navbar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class= "container-navbar">
            <nav>
                <div class="logo">
                    <a href="#/">
                        <img src="./logo/brand.svg" width="130" alt="logo">
                    </a>
                </div>
                <button type="button" id="hamburger" aria-label="navigation-menu" tabindex="0">☰</button>
                    <ul class="nav-list" aria-label="Navigation Menu">
                        <li aria-label="Features">
                            <a class="nav-link" href="#fitur-section" tabindex="0">Features</a>
                        </li>
                        <li aria-label="How It Works">
                            <a class="nav-link" href="#service-content" tabindex="0">How It Works</a>
                        </li>
                        <li aria-label="Testimonials">
                            <a class="nav-link" href="#testimonial-section" tabindex="0">Testimonials</a>
                        </li>
                        <li aria-label="Faqs">
                            <a class="nav-link" href="#faqs" tabindex="0">Faqs</a>
                        </li>
                    </ul>
                <div class= "btn">
                    <a href="#/diagnose" class="btn">
                        Diagnose Now
                    </a>
                </div>
            </nav>
        </div>
        `;
    }
}

customElements.define('navbar-content', navbar);