import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './scss/app.scss';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';
import { Provider } from 'react-redux';
import Router from './router/router';

export default function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
    </Provider >
  );
}
