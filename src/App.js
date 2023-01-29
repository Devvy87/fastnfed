import React from 'react';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer';
import './App.css';
import { Route, Routes, Router } from 'react-router-dom'
import OurMenu from './pages/Menu/OurMenu'
import OurContacts from './pages/OurContacts/OurContacts';
function App() {
  return (
    <div className="App">
 
      <Header/>
     
      <Routes>
     <Route path='/'element={<Home/>}/>
     <Route path='/menu'element={<OurMenu/>}/>
     <Route path='/contacts'element={<OurContacts/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
