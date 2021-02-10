import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers";

const initialState = {};
if(localStorage.getItem('cartItems')){
  initialState.cart = {items: JSON.parse(localStorage.getItem('cartItems'))}
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducers,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
