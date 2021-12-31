import { createStore } from "redux";
import rootRedudcer from "./reducer";

const store = createStore(rootRedudcer);

export default store;