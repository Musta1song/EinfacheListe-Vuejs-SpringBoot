import http from "./http";

class DataService {
  getAll() {
    return http.get("/shoppinglist");
  }

  create(data) {
    return http.post("/newEntry", data);
  }

  update(id) {
    return http.put(`/shoppinglist/patch/${id}`);
  }

  delete(id) {
    return http.delete(`/shoppinglist/${id}`);
  }

}

export default new DataService();