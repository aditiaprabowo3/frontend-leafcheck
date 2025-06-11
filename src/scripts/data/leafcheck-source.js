import API_ENDPOINT from "../globals/api-endpoint";

class LeafCheckSource {
  static async predictDisease(file) {
    const formData = new FormData();
    formData.append("file", file); // "file" ini harus cocok dengan nama param di FastAPI

    try {
      const response = await fetch(API_ENDPOINT.PREDICT, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        console.error("Gagal fetch, status:", response.status);
        return null;
      }

      const responseJson = await response.json();
      console.log("Hasil prediksi:", responseJson);
      return responseJson;
    } catch (error) {
      console.error("Gagal kirim file ke API:", error);
      return null;
    }
  }
}

export default LeafCheckSource;
