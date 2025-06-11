class Getstarted extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="getstarted-container">
                <div class="text-content">
                    <div class= "content">
                        <div class="text-head">
                            <h1>Ready to Detect Your Plant Diseases Instantly?</h1>
                            <p>Get a free, fast, and accurate leaf disease diagnosis with just one click no cost, no hassle.</p>
                        </div>
                    </div>
                    <div class= "btn">
                        <a href="#/diagnose">Diagnose Now<svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" id="arrow"><g fill="none" fill-rule="evenodd" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M1 7h16M11 1l6 6-6 6"></path></g></svg></a>
                    </div>
                </div>
            </section>
        `;
    };
};

customElements.define('getstarted-content', Getstarted);