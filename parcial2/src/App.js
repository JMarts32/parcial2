import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';

import LoginPage from './Components/loginpage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// <Route path="/..." element={< />} />

export default App;
