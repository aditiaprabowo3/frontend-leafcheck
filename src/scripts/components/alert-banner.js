class Alert extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="container-main">
            <div id="dataset-alert" class="alert-container">
            <div class="alert-grid">
              <div class="alert-icon-wrapper">
                <svg class="alert-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#333" width="24" height="24">
                  <circle cx="12" cy="12" r="10" fill="#fff3cd" stroke="#333" stroke-width="2"/>
                  <line x1="12" y1="7" x2="12" y2="13" stroke="#333" stroke-width="2" />
                  <circle cx="12" cy="17" r="1.5" fill="#333" />
                </svg>
              </div>
              <div class="alert-content">
                <div class="alert-header">
                  <h3 class="alert-heading">Informasi Dataset</h3>
                  <button class="alert-close-btn" aria-label="Tutup">&#x2715;</button>
                </div>
                <div class="alert-description">
                  <p>Mohon maaf atas ketidaknyamanannya. Karena keterbatasan data, saat ini sistem kami hanya dapat mendeteksi daun jagung. Terima kasih.</p>
                </div>
              </div>
            </div>
          </div> 
          </div>
        `;
    };
};

customElements.define('alert-content', Alert);