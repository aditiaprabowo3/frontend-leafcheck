class Fitur extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="container-fitur" id= "fitur-section">
                <div class= "content">
                    <div class="text-head">
                        <span>Features</span>
                        <h1>Smart Tools for Fast and Accurate Leaf Disease Detection</h1>
                        <p>Simple, precise, and reliable tools to keep your plants healthy</p>
                    </div>
                </div>
                <div class="grid-card">
                    <div class="grid-item item1">
                        <div class="img-content">
                            <img src="./feature/upload.webp" alt="terapis terlatih">
                        </div>
                        <div class="text-content">
                            <h2>Upload Leaf Photo</h2>
                            <p>Use your phone or computer to easily upload a clear photo of your plant’s leaf anytime, anywhere  fast and hassle free .</p>
                        </div>
                    </div>
                    <div class="grid-item item2">
                        <div class="img-content-2">
                            <img src="./feature/ai.webp" alt="harga yang terjangkau">
                        </div>
                        <div class="text-content">
                            <h2>AI-Powered Disease Detection</h2>
                            <p>Advanced AI analyzes detailed patterns on your plant’s leaf to detect diseases with high accuracy.</p>
                        </div>
                    </div>
                    <div class="grid-item item3">
                        <div class="img-content-3">
                            <img src="./feature/diagnose.webp" alt="pemesanan mudah">
                        </div>
                        <div class="text-content">
                            <h2>Instant Diagnosis Result</h2>
                            <p>Get immediate and accurate diagnosis results right after uploading your leaf photo.</p>
                        </div>
                    </div>
                    <div class="grid-item item4">
                        <div class="img-content">
                            <img src="./feature/healt leaf.webp" alt="layanan pijat">
                        </div>
                        <div class="text-content">
                            <h2>Healthy Leaf Guide</h2>
                            <p>Learn what a healthy leaf should look like with visual examples to help you compare and detect problems early.</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    };
};

customElements.define('fitur-content', Fitur);