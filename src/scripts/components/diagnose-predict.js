class Diagnose extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="header-diagnose">
                <div class="btn-container">
                    <a href="#/" class="back-button">Cancel</a>
                </div>
            </div>

            <section class="container-diagnose" id= "about-section">
                <div class="main-content">
                    <div class="text-head">
                        <h1>Concerned About Your Plant’s Health?</h1>
                    </div>
                   <div class="upload-box">
                        <div class="upload-area" id="upload-area">
                            <div class="icon" id="icon"></div>
                            <p id="upload-text">
                            Drag and drop an image, or 
                            <a href="#" id="browse-link">Browse</a>
                            </p>
                            <input type="file" id="file-input" hidden />

                            <span class="tips-title" id="tips-title">— Tips For Image —</span>
                            <ul class="tips-list" id="tips-list">
                            <li>Use a clear, focused photo of the leaf.</li>
                            <li>Avoid light that is too dark or too bright</li>
                            <li>Only one leaf per photo for best detection</li>
                            <li>A clean background gives more accurate results.</li>
                            </ul>

                            <div id="preview-container" style="display: none;"></div>
                        </div>
                    </div>

                    <button id="diagnose-btn" type="button" class="btn-diagnose">
                        Diagnose Now
                    </button>

                    <div class="prediction-result">
                        
                    </div>
                </div>
            </section>
        `;
    };
};

customElements.define('diagnose-content', Diagnose);