import axios from "axios";
import * as errorActions from "../../store/actions/errorAction";
class AuthService {
  async login(data, store) {
    try {
      const user = await axios.post("http://localhost:8080/login", data);

      return user;
    } catch (e) {
      store.dispatch(errorActions.setError("Usuário ou senha incorreto!"));
      return null;
    }
  }
}

export default new AuthService();
