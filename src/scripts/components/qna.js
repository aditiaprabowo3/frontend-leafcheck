class QNA extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section class="qna-section" id= "faqs">
            <div class= "content">
                <div class="text-head">
                    <span>FAQs</span>
                    <h1>Got Questions? We’ve Got Answers.</h1>
                    <p>Find quick answers to common questions about LeafCheck.</p>
                </div>
            </div>
            <div class="main-content">
                <article class="content-item" tabindex="0">
                    <div class="question ">
                        <h3>What is LeafCheck?</h3>
                        <svg xmlns="http://www.w3.org/2000/svg " id="arrow " x="0 " y="0 " version="1.1 " viewBox="0 0 29 29 " xml:space="preserve ">
                        <path fill="none " stroke="#000 " stroke-linecap="round " stroke-linejoin="round " stroke-miterlimit="10 " stroke-width="2 " d="m20.5 11.5-6 6-6-6 "></path>
                        </svg>
                    </div>
                    <div class="answer">
                        <p>
                            Leafcheck is a website to make it easy for gardeners, vegetable farmers, urban farming enthusiasts to find out what diseases their plants are suffering from, easily and quickly.
                        </p>
                    </div>
                </article>
                <article class="content-item" tabindex="0">
                    <div class="question">
                        <h3>is this website free?</h3>
                        <svg xmlns="http://www.w3.org/2000/svg " id="arrow " x="0 " y="0 " version="1.1 " viewBox="0 0 29 29" xml:space="preserve ">
                        <path fill="none" stroke="#000 " stroke-linecap="round " stroke-linejoin="round " stroke-miterlimit="10 " stroke-width="2 " d="m20.5 11.5-6 6-6-6 "></path>
                        </svg>
                    </div>
                    <div class="answer">
                        <p>
                           Yes, Leafcheck is now accessible without any cost, so you can easily find out about diseases in your plants.
                        </p>
                    </div>
                </article>
                <article class="content-item" tabindex="0">
                    <div class="question">
                        <h3>can i take a photo directly?</h3>
                        <svg xmlns="http://www.w3.org/2000/svg " id="arrow " x="0 " y="0 " version="1.1 " viewBox="0 0 29 29 " xml:space="preserve ">
                        <path fill="none " stroke="#000 " stroke-linecap="round " stroke-linejoin="round " stroke-miterlimit="10 " stroke-width="2 " d="m20.5 11.5-6 6-6-6 "></path>
                        </svg>
                    </div>
                    <div class="answer">
                        <p>
                            For now, Leafcheck is still limited, so you can only take finished images, you can't take photos directly, but we will consider this feature later.
                        </p>
                    </div>
                </article>
                <article class="content-item" tabindex="0">
                    <div class="question">
                        <h3>What plants support?</h3>
                        <svg xmlns="http://www.w3.org/2000/svg " id="arrow " x="0 " y="0 " version="1.1 " viewBox="0 0 29 29 " xml:space="preserve">
                        <path fill="none " stroke="#000 " stroke-linecap="round " stroke-linejoin="round " stroke-miterlimit="10 " stroke-width="2 " d="m20.5 11.5-6 6-6-6 "></path>
                        </svg>
                    </div>
                    <div class="answer">
                        <p>
                            Currently, Leafcheck can only detect corn leaf plants, due to the limited data we currently have, in the future we will update and add more data so that we can detect many plant leaf diseases.
                        </p>
                    </div>
                </article>
                <article class="content-item" tabindex="0">
                    <div class="question">
                        <h3>Accuracy of leafcheck high?</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" id="arrow " x="0 " y="0 " version="1.1 " viewBox="0 0 29 29 " xml:space="preserve">
                        <path fill="none " stroke="#000 " stroke-linecap="round " stroke-linejoin="round " stroke-miterlimit="10 " stroke-width="2 " d="m20.5 11.5-6 6-6-6 "></path>
                        </svg>
                    </div>
                    <div class="answer">
                        <p>
                            Of course, we have a very high accuracy model, so we can detect leaf diseases in plants accurately.
                        </p>
                    </div>
                </article>
                <article class="content-item" tabindex="0">
                    <div class="question">
                        <h3>How accurate is the diagnosis?</h3>
                        <svg xmlns="http://www.w3.org/2000/svg " id="arrow " x="0 " y="0 " version="1.1 " viewBox="0 0 29 29 " xml:space="preserve">
                        <path fill="none " stroke="#000 " stroke-linecap="round " stroke-linejoin="round " stroke-miterlimit="10 " stroke-width="2 " d="m20.5 11.5-6 6-6-6 "></path>
                        </svg>
                    </div>
                    <div class="answer">
                        <p>
                            LeafCheck uses advanced machine learning models trained on thousands of leaf images, providing high accuracy in detecting common plant diseases.
                        </p>
                    </div>
                </article>
            </div>
        </section>
        `;
    }
}

customElements.define('qna-content', QNA);