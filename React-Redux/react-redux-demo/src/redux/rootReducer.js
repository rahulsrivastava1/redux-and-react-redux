import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducers";
import icecreamReducer from "./icecream/icecreamReducers";
import sandwichReducer from "./sandwich/sandwichReducer";
import useReducer from "./user/userReducers";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: icecreamReducer,
  sandwich: sandwichReducer,
  user: useReducer,
});

export default rootReducer;
