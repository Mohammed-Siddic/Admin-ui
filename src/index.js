import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./App";
import { Reducer } from "./storedata/reducer/reducer";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const reducer = combineReducers({ rd1: Reducer });
const store = createStore(reducer, applyMiddleware(thunk));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
