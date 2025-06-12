import LeafCheckSource from '../../data/leafcheck-source';

const DiagnosePage = {
    async render() {
        return `
            <diagnose-content></diagnose-content>
        `;
    },

    async afterRender() {
        // sembunyikan navbar pada halaman diagnose 
        const header = document.querySelector("header");
        header.style.display = "none";

        const browseLink = document.getElementById('browse-link');
        const fileInput = document.getElementById('file-input');
        const previewContainer = document.getElementById('preview-container');
        const predictionContainer = document.querySelector('.prediction-result');

        // Elemen yang akan disembunyikan saat gambar dipilih
        const elementsToHide = [
          document.getElementById('tips-title'),
          document.getElementById('tips-list')
        ];

        browseLink.addEventListener('click', function (e) {
          e.preventDefault();
          fileInput.click();
        });

        fileInput.addEventListener('change', function () {
          if (fileInput.files && fileInput.files[0]) {
            const reader = new FileReader();

            reader.onload = function (e) {
              // Sembunyikan elemen lain
              elementsToHide.forEach(el => el.style.display = 'none');

              // Tampilkan preview
              previewContainer.innerHTML = `<img src="${e.target.result}" 
                alt="Preview" style="width:100%; height: 100%; object-fit:cover; border-radius:16px;" />`;
              previewContainer.style.display = 'block';
            };

            reader.readAsDataURL(fileInput.files[0]);
          }
        });

        // Diagnose submit handle 
        const diagnoseBtn = document.getElementById('diagnose-btn');

        diagnoseBtn.addEventListener('click', async () => {
          const file = fileInput.files[0];

          if (!file) {
            alert("Please select an image first.");
            return;
          }

          // Tampilkan indikator loading
          diagnoseBtn.textContent = "Diagnosing...";
          diagnoseBtn.disabled = true;

          const prediction = await LeafCheckSource.predictDisease(file);

          diagnoseBtn.textContent = "Diagnose Now";
          diagnoseBtn.disabled = false;

          if (prediction && prediction.penyakit) {
            predictionContainer.innerHTML= `
             <div class="prediction-result" style="margin-top: 32px;">
                <h2>Hasil Diagnosa: ${prediction.penyakit}</h2>
                <div>
                  <h3>Penjelasan:</h3>
                  <p>${prediction.penjelasan}</p>

                  <h3>Solusi:</h3>
                  <ul>
                    ${prediction.solusi.split('\n').map(item => `<li>${item}</li>`).join('')}
                  </ul>
                </div>
              </div>
            `;
          } else {
            alert("Gagal menampilkan hasil prediksi gambarmu bukan daun.");
          }          
        });
    },
};

export default DiagnosePage;