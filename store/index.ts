import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const makeStore = () => createStore(rootReducer, composeWithDevTools());

export default makeStore;
