import React from './react';
import logo from './logo.svg';
import './App.scss';
import {Routes} from 'react-router-dom';
import DropDrag from './components/Layout';

function App() {
  return (
    <>
    <Routes path="/" element={<DropDrag />} ></Routes>
    </>
  );
}

export default App;
