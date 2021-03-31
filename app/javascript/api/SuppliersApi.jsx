import axios from "axios";

class SuppliersApi {
  getSuppliers() {
    return axios.get('/api/v1/suppliers');
  }
  
  addSuppliers(data) {
    if (data) {
      return axios.post('/api/v1/suppliers', data);
    }
  }
}

export default new SuppliersApi();
