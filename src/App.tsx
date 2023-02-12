import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Create from './pages/Create';
import Article from './pages/Article';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/editor" element={<Create />} />
        <Route path="/signin" element={<Register />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
