import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";
import thunk from "redux-thunk";
const middlewares = [thunk];

if (process.env.NODE_ENV !== "production") {
  middlewares.push(createLogger());
}
const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middlewares),
    (window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()) ||
      compose
  )
);

const persistor = persistStore(store);

export { store, persistor };
