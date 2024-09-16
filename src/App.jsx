// import './App.css';  
import './tailwind-output.css'; // Make sure this path is correct  
import Signup from './Signup';  
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import Login from './Login';  
import Home from './Home';  

function App() {  
  return (  
    <BrowserRouter>  
      <Routes>  
        <Route path='/register' element={<Signup />} />  
        <Route path='/login' element={<Login />} />  
        <Route path='/home' element={<Home />} />
      </Routes>  
    </BrowserRouter>  
  );  
}  

export default App;