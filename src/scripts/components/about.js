class About extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="container-about" id= "about-section">
                <div class="main-content">
                    <div class="img-content">
                        <img src="about/about.svg" alt="about">
                    </div>
                    <div class="text-content">
                        <div class="mini-text">BELAJAR TANPA MERASA BOSAN </div>
                        <h2>Rasakan pengalaman belajar yang luar biasa</h2>
                        <p>Dengan jaksara anda bisa merasakan pengalaman pembelajaran yang belum pernah anda rasakan sebelumnya, dan tentunya gratis</p>

                        <div class= "btn">
                            <a href="#/select">Mulai Sekarang</a>
                        </div>
                    </div>
                </div>

                <div class="main-content content-two">
                    <div class="text-content">
                        <div class="mini-text">MATERI AKSARA YANG MUDAH</div>
                        <h2>Materi belajar yang sudah sangat terstruktur</h2>
                        <p>Materi yang kami berikan bisa anda pilih sesuai dengan
                        pemahaman anda dan level anda, anda bisa memilih
                        materi dari termudah sampai tersulit</p>

                        <div class= "btn">
                            <a href="#/select">Mulai Sekarang</a>
                        </div>
                    </div>
                    <div class="img-content">
                        <img src="about/ilustration.svg" alt="about">
                    </div>
                </div>
            </section>
        `;
    };
};

customElements.define('about-content', About);