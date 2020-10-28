import axios from "axios";
import * as errorActions from "../../store/actions/errorAction";
class DashboardService {
  async getAllClients(store) {
    try {
      const clients = await axios.get("http://localhost:8080/clients");

      return clients.data;
    } catch (e) {
      store.dispatch(errorActions.setError("Erro ao buscar clientes"));
      return [];
    }
  }

  async getOne(id, store) {
    try {
      const client = await axios.get(`http://localhost:8080/client?id=${id}`);

      return client.data;
    } catch (e) {
      store.dispatch(errorActions.setError("Erro ao buscar cliente"));
      return [];
    }
  }

  async createClient(data, store) {
    try {
      const clients = await axios.post("http://localhost:8080/clients", data);

      return clients.data;
    } catch (e) {
      console.log(e);
      store.dispatch(errorActions.setError("Erro ao Cadastrar cliente"));
      return null;
    }
  }

  async updateClient(data, id, store) {
    try {
      const clients = await axios.put(
        `http://localhost:8080/clients?id=${id}`,
        data
      );

      return clients.data;
    } catch (e) {
      console.log(e);
      store.dispatch(errorActions.setError("Erro ao atualizar cliente"));
      return null;
    }
  }

  async deleteClient(id, store) {
    try {
      const clients = await axios.delete(
        `http://localhost:8080/clients?id=${id}`
      );

      return clients.data;
    } catch (e) {
      console.log(e);
      store.dispatch(errorActions.setError("Erro ao Excluir cliente"));
      return null;
    }
  }
}

export default new DashboardService();
