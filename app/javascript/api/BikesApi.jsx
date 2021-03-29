import axios from "axios";

class BikesApi {
  getBikes() {
    return axios.get('/api/v1/bikes');
  }
  
  addBike(data) {
    if (data) {
      return axios.post('/api/v1/bikes', data);
    }
  }
  
  deleteBike(bikeId) {
    return axios.post(`/api/v1/bikes/${bikeId}`);
  }
}

export default new BikesApi();
