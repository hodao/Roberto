
import { useState } from 'react'
import './App.css'
import Header from "./Pages/Home/Header"
import Footer from "./Pages/Home/Footer"
import Hero from "./Pages/Home/Hero"
import Testimonials from './Pages/Testimonials/Testimonials'
import RS from './Pages/RobertosStory/RS'
import Services from './Pages/Services/Services'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Contact from "./Pages/Contact Us/Contact"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      
      <BrowserRouter>
        <Routes> 
          <Route path="/Home" element={<App/>} /> 
          <Route path="/RS" element={<RS/>} /> 
          <Route path="/Services" element={<Services/>} /> 
          <Route path="/Testimonials" element={<Testimonials/>} /> 
          <Route path="/Contact" element={<Contact/>}/>
  
        </Routes>
        
      </BrowserRouter>

      <Hero/>
      <RS/>
      <Services/>
      <Contact/>
      <Testimonials/>

      <Footer />


    

    </div>
  );
}

export default App
