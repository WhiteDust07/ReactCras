import {BrowserRouter as Router, Routes , Route,} from "react-router-dom"
import './App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Posts from './pages/Posts.jsx'
import Nav from './pages/Nav.jsx'
import Users from "./pages/Users.jsx"
import { useState, useEffect} from 'react'

function App() {
  return (
    // LInk elements are similar to a elments 
    // but link doesn't reload ever time use it as anchor do
    <>
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact"  element={<Contact/>}/>
        <Route path="/posts"  element={<Posts/>}/>
        <Route path="/users/:username"  element={<Users/>}/>
      </Routes>
    </Router>
    </>
  )
}


export default App
