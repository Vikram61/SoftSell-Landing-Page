import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Hero from './components/Hero';
import How from './components/How';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import { ToastContainer } from 'react-toastify';
function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="App">
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <div>
        <Hero/>
        <How/>
        <WhyChoose/>
        <Testimonials/>
        <ContactForm/>
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </div>
  );
}

export default App;