import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Task1 from './Components/Task1';
import Home from './Components/Home';
import Task4 from './Components/Task4';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home></Home>} ></Route>
        <Route exact path='/task1' element={< Task1 />}></Route>
        <Route exact path='/task4' element={< Task4 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
