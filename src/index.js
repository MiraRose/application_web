import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import AppForm from './features/application/AppForm';
import store from './redux/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { fetchApplications } from './redux/actions';

store.dispatch(fetchApplications())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="appForm" element={<AppForm />} />
          </Route>
        </Routes>
      </BrowserRouter>,
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
