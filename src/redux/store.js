import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import searchInfoReducer from "./reducers/searchInfoReducer";
import guestsNumberReducer from "./reducers/guestsNumberReducer";

const rootReducers = combineReducers({
  searchInfoReducer,
  guestsNumberReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
