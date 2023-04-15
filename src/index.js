import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { GlobalStyle } from 'GlobalStyle.styled';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <GlobalStyle />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
