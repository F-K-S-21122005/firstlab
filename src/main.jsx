import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import TopBar from './Top-bar/Top-bar.jsx';
import Card from './Card/Card.jsx';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <TopBar/>
    <div overflow ="auto">
      <Card/>
    </div>
    <Footer/>
    
    </React.StrictMode>,
)
