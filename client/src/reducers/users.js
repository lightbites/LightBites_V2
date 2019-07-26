// import { createReducer } from "redux-starter-kit";
import { createSlice } from "redux-starter-kit";

export const users = createSlice({
  slice: "users", // namespace
  initialState: { name: "Anthony" },
  reducers: {
    "login": (state, action) => {
      state.name = action.payload.name;
    },
    "logout": (state, action) => {
      state.name = "John";
    }
  }
});

export default users.reducer;




// const users = createReducer({ 
//   name: "Anthony"

// }, {
//   "login": (state, action) => {
//     state.name = action.name;
//   }
// });
