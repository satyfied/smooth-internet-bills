import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Pricing from './routes/Pricing'
import Billing from './routes/Billing'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Pricing' element={<Pricing />} />
      <Route path='/Billing' element={<Billing />} />
    </Routes>
    </>
  );
}

export default App;
