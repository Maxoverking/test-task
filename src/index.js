import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter basename="test-task">
      <PersistGate loading={null} persistor={persistor}>
        <Suspense>
          <App />
        </Suspense>
      </PersistGate>
    </BrowserRouter>
  </Provider>

  // </React.StrictMode>
);
