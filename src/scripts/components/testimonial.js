class Testimonial extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="section-testimonial" id="testimonial-section">
                <div class="container-testimonial">
                    <div class= "content">
                        <div class="text-head">
                            <span>Testimonials</span>
                            <div class="img">
                                <img src="/testimonial/star.svg" alt="img-testimoni">
                            </div>
                            <h1>We are trusted and loved by farmers, gardeners.</h1>
                            <p>Trusted by gardeners, farmers, and plant enthusiasts alike.</p>
                        </div>
                    </div>

                    <div class="card-testi-container">
                    <article class="card-testimonial" tabindex="0">
                        <div class="text-card">
                        <p tabindex="0">"LeafCheck really helped me identify plant diseases quickly. The UI/UX is intuitive—perfect for farmers who aren't tech-savvy!"</p>
                        </div>
                        <div class="profile">
                        <img src="testimonial/testi1.png" alt="testimonial" width="50">
                        <div class="text-profile">
                            <h2>Benjamin Jackson</h2>
                            <p>Agritech Consultant</p>
                        </div>
                        </div>
                    </article>

                    <article class="card-testimonial" tabindex="0">
                        <div class="text-card">
                        <p tabindex="0">"Wooooow this app is amazing! I can detect diseases on my plants just by taking a photo. Super useful for my home garden!"</p>
                        </div>
                        <div class="profile">
                        <img src="testimonial/testi2.png" alt="testimonial" width="50">
                        <div class="text-profile">
                            <h2>Muhamad Ibrahim</h2>
                            <p>Hobbyist Gardener</p>
                        </div>
                        </div>
                    </article>

                    <article class="card-testimonial" tabindex="0">
                        <div class="text-card">
                        <p tabindex="0">"I love the interactive diagnosis quiz. It feels like a game but actually helps me learn how to care for my crops better."</p>
                        </div>
                        <div class="profile">
                        <img src="testimonial/testi3.png" alt="testimonial" width="50">
                        <div class="text-profile">
                            <h2>Lia Amelia</h2>
                            <p>Agronomy Student</p>
                        </div>
                        </div>
                    </article>

                    <article class="card-testimonial" tabindex="0">
                        <div class="text-card">
                        <p tabindex="0">"The learning and quiz features are very useful. It’s never boring and now I feel more confident in handling plant diseases."</p>
                        </div>
                        <div class="profile">
                        <img src="testimonial/testi4.png" alt="testimonial" width="50">
                        <div class="text-profile">
                            <h2>James Rodriguez</h2>
                            <p>Organic Farmer</p>
                        </div>
                        </div>
                    </article>

                    <article class="card-testimonial" tabindex="0">
                        <div class="text-card">
                        <p tabindex="0">"This app really helps me understand symptoms of leaf diseases. The user-friendly interface and simple explanations are great!"</p>
                        </div>
                        <div class="profile">
                        <img src="testimonial/testi5.png" alt="testimonial" width="50">
                        <div class="text-profile">
                            <h2>Alysa</h2>
                            <p>Plant Health Antusiast</p>
                        </div>
                        </div>
                    </article>

                    <article class="card-testimonial" tabindex="0">
                        <div class="text-card">
                        <p tabindex="0">"A very engaging and educational tool. The combination of image scanning and interactive learning makes it fun and effective."</p>
                        </div>
                        <div class="profile">
                        <img src="testimonial/testi6.png" alt="testimonial" width="50">
                        <div class="text-profile">
                            <h3>Mason</h3>
                            <p>Gardener</p>
                        </div>
                        </div>
                    </article>

                    <article class="card-testimonial" tabindex="0">
                        <div class="text-card">
                        <p tabindex="0">"The learning and quiz features are very useful. It’s never boring and now I feel more confident in handling plant diseases."</p>
                        </div>
                        <div class="profile">
                        <img src="testimonial/testi4.png" alt="testimonial" width="50">
                        <div class="text-profile">
                            <h2>James Rodriguez</h2>
                            <p>Organic Farmer</p>
                        </div>
                        </div>
                    </article>

                    <article class="card-testimonial" tabindex="0">
                        <div class="text-card">
                        <p tabindex="0">"This app really helps me understand symptoms of leaf diseases. The user-friendly interface and simple explanations are great!"</p>
                        </div>
                        <div class="profile">
                        <img src="testimonial/testi5.png" alt="testimonial" width="50">
                        <div class="text-profile">
                            <h2>Alysa</h2>
                            <p>Plant Health Antusiast</p>
                        </div>
                        </div>
                    </article>

                    <article class="card-testimonial" tabindex="0">
                        <div class="text-card">
                        <p tabindex="0">"A very engaging and educational tool. The combination of image scanning and interactive learning makes it fun and effective."</p>
                        </div>
                        <div class="profile">
                        <img src="testimonial/testi6.png" alt="testimonial" width="50">
                        <div class="text-profile">
                            <h3>Mason</h3>
                            <p>Gardener</p>
                        </div>
                        </div>
                    </article>
                    </div>
                </div>
                </section>
        `;
    };
};

customElements.define('testimonial-content', Testimonial);