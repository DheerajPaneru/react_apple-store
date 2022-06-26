import { createStore } from "redux";
import rootReducers from "./redux2";

const store = createStore(rootReducers);
export default store;