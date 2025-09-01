import {createStore, applyMiddleware} from "redux";
import {thunk} from "redux-thunk";
import { fetchReducer } from "./reducer";

export const store = createStore(fetchReducer, applyMiddleware(thunk));
