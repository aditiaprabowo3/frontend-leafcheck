class About extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="container-about" id= "about-us">
                <div class= "content">
                    <div class="text-head">
                        <span>About Us</span>
                        <h1>We are here for those who care about the health of their plants.</h1>
                    </div>
                </div>
                <div class="main-content">
                    <div class="img-content">
                        <img src="about/about 1.webp" alt="about">
                    </div>
                    <div class="text-content">
                        <h2>Born from Concern, Built for Everyone Who Cares for Plant</h2>
                        <p>We started LeafCheck because we believe that plant care should be simple, accessible, and smart. Whether you're a farmer, a gardener, or just someone who loves greenery, LeafCheck helps you detect plant diseases early—so your plants stay healthy, and your efforts don’t go to waste.</p>

                        <div class= "btn">
                            <a href="#/diagnose">Diagnose Now</a>
                        </div>
                    </div>
                </div>

                <div class="main-content content-two">
                    <div class="text-content">
                        <h2>Crafted by Growers, Scientists, and Technologists Who Believe in a Greener Future</h2>
                        <p>LeafCheck is the result of collaboration between people who live close to nature and those who innovate for it. Our team brings together hands-on farming experience, plant science, and the latest in artificial intelligence — all to help you care for plants with clarity and confidence.</p>

                        <div class= "btn">
                            <a href="#">Meet the Team</a>
                        </div>
                    </div>
                    <div class="img-content">
                        <img src="about/about 2.webp" alt="about">
                    </div>
                </div>
            </section>
        `;
    };
};

customElements.define('about-content', About);