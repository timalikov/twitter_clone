import React from 'react';
import { Routes, Route } from "react-router-dom";
import '../src/css/App.css'
import Header from './components/Header'
import Home from './components/Pages/Home';
import About from './components/Pages/About/About';


function App() {
    return (
        <div className='app'>
            <Header />
            <div className="page">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
