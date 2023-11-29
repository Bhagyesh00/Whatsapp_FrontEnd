import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from "./Componets/HomePage";
import Signin from "./Componets/Register/Signin";
import SignUp from "./Componets/Register/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
    </Routes>
  );
}

export default App;
