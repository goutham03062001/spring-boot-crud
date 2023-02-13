import React from 'react'
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from "./Pages/Home";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
        <Route path = "/"  element = { <Home/> } />
          <Route path = "/signup" element = { <Signup/>} />
          <Route path = "/login" element = { <Login/> }/>
        </Routes>
      </Router>
    </div>
  )
}

export default App