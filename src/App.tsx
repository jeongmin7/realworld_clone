import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Create from './pages/Create';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import { useDispatch } from 'react-redux';
import { loginActions } from './store/Loginslice';

function App() {
  const dispatch = useDispatch();
  const localStorageToken: string | null = localStorage.getItem('token');
  useEffect(() => {
    if (localStorageToken) {
      dispatch(loginActions.login());
    }
  }, [dispatch, localStorageToken]);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/editor" element={<Create />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
