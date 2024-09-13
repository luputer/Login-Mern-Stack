import { useState } from 'react';  
// import './App.css';  
import './tailwind-output.css'; // Pastikan ini benar
import Signup from './Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';

function App() {  
  return (  
   <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      {/* Tambahkan route lain sesuai keinginan */}
    </Routes>
   </BrowserRouter>
  );  
}  

export default App;