import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home.jsx';
import Owner from './Owner';
import Navbar from './Navbar.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/owner" component={Owner} />
      </Routes>
    </BrowserRouter>
  )
}

export default App