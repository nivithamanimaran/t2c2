import React from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'
import Home from './containers/Home/Home';
import Footer from './containers/Footer/Footer';
import Expertise from './containers/Expertize/Expertise';
import Aboutus from './containers/Aboutus/Aboutus';
import Contactus from './containers/Contactus/Contactus';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        
     <Route path='/' element={<Home/>}/>
     <Route path='footer' element={<Footer/>}/>
     <Route path='expertise' element={<Expertise/>}/>
     <Route path='aboutus' element={<Aboutus/>}/>
     <Route path='contactus' element={<Contactus/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
