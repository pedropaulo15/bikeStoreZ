import axios from "axios";

class PurchaseApi {
  getPurchases() {
    return axios.get('/api/v1/purchases');
  }
  
  addPurchases(data) {
    if (data) {
      return axios.post('/api/v1/purchases', data);
    }
  }
}

export default new PurchaseApi();
