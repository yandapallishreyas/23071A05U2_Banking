import React from "react";
import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";
import Registration from "./components/Registration";
import About from "./components/About";
import Balance from "./components/Balance";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Transfers from "./components/Transfers";
import './App.css';
function App() {
  return (
    <div>
    <div className='header'>Banking Website</div>
      <nav>
        <Link to="/">Register</Link> |
        <Link to="/login">Login</Link> |
        <Link to="/bal">Balance</Link> |
        <Link to="/tran">Transfers</Link> |
        <Link to="/prof">Profile</Link> |
        <Link to="/cont">Contact</Link> |
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bal" element={<Balance/>} />
        <Route path="/tran" element={<Transfers />} />
        <Route path="/prof" element={<Profile />} />
        <Route path="/cont" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
  );
}

export default App;