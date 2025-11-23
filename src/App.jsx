import './App.css'
import { useRef, useEffect } from 'react';
import Header from './Components/Layouts.jsx/Header'
import Banner from './Components/Layouts.jsx/Banner'
import Users from './Components/Layouts.jsx/Users'
import MangeMoney from './Components/Layouts.jsx/MangeMoney'
import Footer from './Components/Layouts.jsx/Footer'
import Review from './Components/Layouts.jsx/Review'
import AccountTransfer from './Components/Layouts.jsx/AccountTransfer'
import { initScrollAnimations } from './utils/scrollAnimation';

function App() {
  // Refs for each section
  const bannerRef = useRef(null);
  const mangeMoneyRef = useRef(null);
  const accountTransferRef = useRef(null);
  const reviewRef = useRef(null);
  const footerRef = useRef(null);

  // Initialize scroll animations on mount
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  // Function to scroll to section
  const scrollToSection = (section) => {
    if (section && section.current) {
      section.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header scrollToSection={scrollToSection} refs={{
        Home: bannerRef,
        About:   mangeMoneyRef ,
        
        Transfer:accountTransferRef,
        Reviews: reviewRef,
        Footer: footerRef
      }} />

      {/* Sections with refs */}
      <div ref={bannerRef} ><Banner/></div>
      <div ><Users/></div>
      <div ref={mangeMoneyRef}><MangeMoney/></div>
      <div ref={accountTransferRef}><AccountTransfer/></div>
      <div ref={reviewRef}><Review/></div>
      <div ref={footerRef}><Footer/></div>
    </>
  )
}

export default App