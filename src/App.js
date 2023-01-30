import React from 'react';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import OurMenu from './pages/Menu/OurMenu'
import OurContacts from './pages/OurContacts/OurContacts';
import SignIn from './pages/SignIn/SignIn';
import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'
import Profile from './pages/Profile/Profile';
function App() {

  const isLoggedIn = useSelector(state => state.isLoggedIn)

  return (
    <div className="App">
      <Header  />
     
      <Routes>
     <Route path='/home'element={<Home/>}/>
     <Route path='/menu'element={<OurMenu/>}/>
     <Route path='/contacts'element={<OurContacts/>}/>
     <Route exact path="/" element={
          isLoggedIn 
          ? <Profile/> 
          : <Navigate to='/signin'/>
          
        } />
        <Route path="signin" element={
          !isLoggedIn 
          ? <SignIn/> 
          : <Navigate to='/'/>
        } />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
