import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Top_bar from './Top_bar.jsx'
import Card from './Card.jsx'
import './index.css'
import { Link, animateScroll as scroll } from "react-scroll";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Top_bar/>
    <div overflow ="auto">
      <Card/>
    </div>
    <Footer/>
    
    </React.StrictMode>,
)
