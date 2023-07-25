import React from 'react';
import {BrowserRouter,Route,Router,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'
import Home from './containers/Home/Home';
import Footer from './containers/Footer/Footer';
import Expertise from './containers/Expertize/Expertise';
import Aboutus from './containers/Aboutus/Aboutus';
import Getintouch from './containers/Getintouch/Getintouch';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        
     <Route path='/' element={<Home/>}/>
     <Route path='footer' element={<Footer/>}/>
     <Route path='expertise' element={<Expertise/>}/>
     <Route path='aboutus' element={<Aboutus/>}/>
     <Route path='getintouch' element={<Getintouch/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
