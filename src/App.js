import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';

function App() {
  return (
    <>
    <Navbar />
      <Routes >
      <Route path='/' element={<Hero/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/:id' element={<Product/>}/>
      </Routes>
     
    </>
  );
}

export default App;
