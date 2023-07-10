import { createStore } from "redux";
import { combineReducers } from "redux";
import isOnModal from "../modules/isOnModal";

const rootReducer = combineReducers({
    isOnModal,
});

const store = createStore(rootReducer);

export default store;
