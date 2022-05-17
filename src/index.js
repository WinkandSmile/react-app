import React from "react";
import ReactDOM from "react-dom";

import App from './App';
import About from './pages/About';
import Terms from './pages/Terms';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


ReactDOM.render(
<Router>
    <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about' element={<About />} />
        <Route path='/terms' element={<Terms />} />
    </Routes>
</Router>, 
document.getElementById('root')
);