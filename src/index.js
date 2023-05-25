import './index.css';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import Loader from './component/Loader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter basename="test-task">
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<Loader />}>
          <App />
        </Suspense>
      </PersistGate>
    </BrowserRouter>
  </Provider>
);
