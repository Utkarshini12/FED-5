import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 

import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import Lazy from './concepts/Lazy';
import {Suspense} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (

//     <div className="container">
// <Lazy />
//     </div>

    
   
      <Router>
        <Suspense fallback={<div>loading...</div>}>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
          
        </Routes>
        </Suspense>
      </Router>
      
   
  );
}

export default App;
