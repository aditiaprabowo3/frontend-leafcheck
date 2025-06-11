class Aksara extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="header-aksara">
                <div class="logo">
                    <a href="#">
                        <img src="/logo/brand.svg" alt= "img-logo">
                    </a>
                </div>
            </div>
            <div class="aksara-container" id="resto-content">
                <div class="text-head">
                    <h2 id="time">Good Morning 👋🏻</h2>
                    <h1>Belajar Sekarang yuk!</h1>
                    <p>Kamu bisa belajar hal paling dasar dahulu seperti macam-macam huruf aksara jawa yang ada di bawah ini.</p>
                </div>
                <div class="aksara" id="card-aksara"></div>
            </div>
        `;
    };
};

customElements.define('list-aksara', Aksara);