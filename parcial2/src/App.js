import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';

import LoginPage from './Components/loginpage';
import Tarjetas from './Components/tarjetas';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/cafes' element={<Tarjetas />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// <Route path="/..." element={< />} />

export default App;
