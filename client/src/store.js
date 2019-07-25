import { configureStore } from "redux-starter-kit";
import users from "./reducers/users";

const store = configureStore({
  reducer: {
    users: users
  }
});

export default store;