import { combineReducers, createStore } from "redux";
import employeeReducer from "./reducers/Reducers";

const rootReducer = combineReducers({
    reducer: employeeReducer,
})
const store = createStore(rootReducer);

export default store;