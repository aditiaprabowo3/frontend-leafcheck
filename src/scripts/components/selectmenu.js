class SelectMenu extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="select-container">
                <div class= "content">
                    <div class="text-head">
                        <h1>Silahkan pilih kamu mau belajar atau bermain kuis?</h1>
                        <p>Pilihlah sesuai dengan apa yang butuhkankan danpahami dan manfaatkan sebaik mungkin</p>
                    </div>
                </div>
                <div class="btn-select-container">
                    <a href="#/aksara">
                        <div class="btn-belajar">
                            <img src="/select/belajar.svg" alt="img">
                            <h3>Belajar Aksara</h3>
                            <p>Pahami dan pelajari dengan baik <br> setiap materinya</p>
                        </div>
                    </a>
                    <a href="#/quiz">
                        <div class="btn-belajar">
                            <img src="/select/kuis.svg" alt="img">
                            <h3>Bermain Kuis</h3>
                            <p>Latih pemahamanmu agar lebih <br> paham dan lancar lagi</p>
                        </div>
                    </a>
                </div>
            </div>
        `;
    };
};

customElements.define('select-content', SelectMenu);