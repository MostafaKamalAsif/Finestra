import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Layouts.jsx/Header'
import Banner from './Components/Layouts.jsx/Banner'
import Users from './Components/Layouts.jsx/Users'
import MangeMoney from './Components/Layouts.jsx/MangeMoney'
import Footer from './Components/Layouts.jsx/Footer'

function App() {


  return (
<>
<Header/>
<Banner/>
<Users/>
<MangeMoney/>
<Footer/>
</>
    
  )
}

export default App
