import React from 'react';
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './asset/css/index.css';
import { Provider } from "react-redux";
import Store from "./store";
import { addError } from './actions/showListActions';
// import $ from "jquery";
import { BrowserRouter as  Router } from 'react-router-dom';
import App from "./components/App";
import { PersistGate } from "redux-persist/integration/react";

const { persistor, store } = Store();

// store.subscribe(saveState)

window.addEventListener(
    "error",
    ({message}) => store.dispatch(addError(message))
)

window.store = store;

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// $(document).bind("DOMNodeRemoved", function(e) {
//   console.log("Removed: " + e.target.nodeName);
// });
