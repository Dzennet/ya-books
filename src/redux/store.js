import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import mainReducer from "./main/mainReducer";

const reducers = combineReducers({
  main: mainReducer,
});

const store = createStore(reducers, compose(applyMiddleware(thunkMiddleware)));

export default store;
