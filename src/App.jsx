import {BrowserRouter , Routes , Route} from "react-router-dom";
import React from "react"
import './App.css';
import Header from './header/Header';
import About from './pages/about/About';
import Shop from "./pages/shop/Shop";
import Journal from "./pages/journal/Journal";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/about" element={<Shop/>} />
        <Route path="/journal" element={<Journal/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
