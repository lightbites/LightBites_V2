import { createReducer } from "redux-starter-kit";

const users = createReducer({ 
  name: "Anthony",
  type: "b@d@$$",
  team: "blue"

}, {
  "login": (state, action) => {
    // return state;
    state.name = action.name;
  }
});

export default users;