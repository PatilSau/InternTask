import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dishes from './Dishes'
import SelectDish from './SelectDish'
const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Dishes />} />
        <Route path="/select" element={<SelectDish />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App