import './style/index.scss';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import React from 'react';
import Transactions from './pages/Transactions/Transactions';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { store } from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

const container   = document.getElementById('root');
const root        = createRoot(container);
let persistor     = persistStore(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();