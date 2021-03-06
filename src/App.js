import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="global">
        <Routes>
          <Route path="/home" element={<LandingPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
