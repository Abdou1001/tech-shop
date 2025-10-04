import React, { createContext, useState } from 'react';
import './App.css'
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from './components/cart/Cart';
import Shop from './components/shop/Shop';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

// AOS libarary
import AOS from "aos"
import "aos/dist/aos.css"
import About from './components/about-us/About';

export const varContext = createContext();

function App() {

  // AOS libarary
  React.useState(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom"
    }, []);
    AOS.refresh()
  })


  const [numItemCart, setNumItemCart] = useState([]);

  const [showPopup, setShowPopup] = useState(false);



  return (
    <Router>
      <div className='app bg-white dark:bg-gray-900 dark:text-white duration-200'>
        {/* Navbar */}
        <varContext.Provider value={{ numItemCart, setNumItemCart, setShowPopup }}>
          <Navbar />
        </varContext.Provider>

        {/* Home */}
        <varContext.Provider value={{ numItemCart, setNumItemCart, showPopup, setShowPopup }}>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </varContext.Provider>


        {/* Shop */}
        <varContext.Provider value={{ numItemCart, setNumItemCart }}>
          <Routes>
            <Route path='/shop' element={<Shop />} />
          </Routes>
        </varContext.Provider>
        
        {/* About us */}
        <varContext.Provider value={{ showPopup, setShowPopup }}>
          <Routes>
            <Route path='/about' element={<About />} />
          </Routes>
        </varContext.Provider>

        {/* Contact */}
        <varContext.Provider value={{ showPopup, setShowPopup }}>
          <Routes>
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </varContext.Provider>

        {/* Cart */}
        <varContext.Provider value={{ numItemCart, setNumItemCart, showPopup, setShowPopup }}>
          <Routes>
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </varContext.Provider>
      
      </div>

      {/* footer */}
      <Footer />
    </Router>
  )
}

export default App
