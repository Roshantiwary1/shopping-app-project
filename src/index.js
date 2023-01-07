import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import "./App.css"
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Provider store={store}>
<ToastContainer
/>
    <App />
</Provider>
    </BrowserRouter>
);
