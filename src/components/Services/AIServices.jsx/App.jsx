import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Web from "./Componets/web"
import Sp_ad from "./Sp_ad"


function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Sp_ad />}></Route>
        <Route path="/web" element={<Web/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
