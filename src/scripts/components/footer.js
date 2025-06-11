class footer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <footer>
                <div class="footer-container">
                    <div class="item">
                        <div class="logo">
                            <a href="#">
                                <img src="./logo/brand.svg" width="180" alt="logo">
                            </a>
                            <p>© 2025 LeafCheck. All rights reserved.</p>
                        </div>
                        
                    </div>
                    <div class= "main-content">
                        <div class="item">
                            <h2>Quick Links</h2>
                            <ul>
                                <li>
                                    <p>Features</p>
                                </li>
                                <li>
                                    <p>How It Works</p>
                                </li>
                                <li>
                                    <p>Testimonials</p>
                                </li>
                                <li>
                                    <p>FAQs</p>
                                </li>
                            </ul>
                        </div>
                        <div class="item">
                            <h2>Contact Us</h2>
                            <ul>
                                <li>
                                    <p>leafcheck@gmail.com</p>
                                </li>
                                <li>
                                    <p>+62 812-3456-7890</p>
                                </li>
                                <li>
                                    <p>Testimonials</p>
                                </li>
                                <li>
                                    <p>FAQs</p>
                                </li>
                            </ul>
                        </div>
                          <div class="item">
                            <h2>Help Center</h2>
                            <ul>
                                 <li>
                                    <p>How to Use</p>
                                </li>
                                <li>
                                    <p>Diagnosis Guide</p>
                                </li>
                                <li>
                                    <p>Troubleshooting</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            
            <img src="https://cdn.prod.website-files.com/681b3a405ce7998b73555606/681b77f977605b89ad362eb3_Group.svg" loading="lazy" alt="" class="img-full">
        `; // eslint-disable-next-line no-extra-semi
    };
    // eslint-disable-next-line no-extra-semi
};

customElements.define('footer-content', footer);