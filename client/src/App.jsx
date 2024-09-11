import React from 'react'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Register from './components/Register.jsx';
import Edit from './components/Edit.jsx';
import Details from './components/Details.jsx';
import {Routes, Route } from "react-router-dom";

function App(){
  return(
    <>
    <Navbar/> 
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/edit/:id" element={<Edit />}/>
      <Route path="/view/:id" element={<Details />}/>
    </Routes>
    </>
  );
}

export default App;