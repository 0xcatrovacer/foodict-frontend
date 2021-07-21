import { createStore } from "redux";

import cartReducer from "./cart/cartReducers";

const store = createStore(cartReducer);

export default store;
