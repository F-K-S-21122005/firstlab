import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import './index.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import App from './pages/Mainbody';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <App/>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
