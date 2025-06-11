class Hero extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="hero-container">
                <div class= "text-content">
                    <div class="text-wrapper">
                        <h1>Instant Leaf Disease Diagnosis with Smart Treatment Suggestions<h1>
                        <p>Upload a photo of your plant’s leaf and let LeafCheck detect diseases and recommend the right treatment  fast, easy, and accurate.</p>
                    </div>

                    <div class= "btn">
                        <a href="#/diagnose">Diagnose Now<svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" id="arrow"><g fill="none" fill-rule="evenodd" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M1 7h16M11 1l6 6-6 6"></path></g></svg></a>
                    </div>
                </div>
                <div class= "img-content">
                    <img src="/hero/banner.webp" alt="img-hero">
                </div>
            </section>
        `;
    };
};

customElements.define('hero-content', Hero);