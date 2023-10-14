import { combineReducers } from "redux";

// reducers
import auth from "./auth";
import apperance from "./apperance";

const rootReducer = combineReducers({
    auth,
    apperance,
});

export type RootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
