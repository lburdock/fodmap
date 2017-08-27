import { createStore } from "redux";
import rootReducer from "../reducers";

export default function () {
    return createStore(rootReducer);
}
