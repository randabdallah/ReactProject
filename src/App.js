import React from "react";
import './App.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import CustomNavbar from "./component/CustomNavbar";
import About from "./component/About";
import Blog from "./component/Blog";
import Contact from "./component/Contact";
import Login from './component/Login';
import Footer from "./component/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/Blog' },
    { name: 'Contact', path: '/contact' },
  ];
  const socialLinks = [
    { url: 'https://facebook.com', iconClass: 'fab fa-facebook-f' },
    { url: 'https://twitter.com', iconClass: 'fab fa-twitter' },
    { url: 'https://instagram.com', iconClass: 'fab fa-instagram' },
    { url: 'https://linkedin.com', iconClass: 'fab fa-linkedin-in' },
  ];

  return (
    <BrowserRouter>
    <div className="Apps">
      <CustomNavbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        </div>
             <Footer
             brand="My Brand"
             links={footerLinks}
             socialLinks={socialLinks}
             copyright="© 2024 My Company. All rights reserved."
           />
      </div>

      </BrowserRouter>
    
  );
}; 

export default App;
