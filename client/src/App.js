import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Home, Create, Update,Entries } from './pages';

function App() {
  return (
    <div>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Update" element={<Update/>}/>
              <Route path="/Create" element={<Create/>}/>
              <Route path="/Entries" element={<Entries/>}/>
              
          </Routes>

    </div>
  )
}

export default App
