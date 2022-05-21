import React from 'react';
import 'flowbite';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';


function getLibrary(provider) {
  return new Web3Provider(provider);
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App>GENERAL!</App>} />
        <Route path="uploader" element={<App>Uploader!</App>} />
        <Route path="about" element={<App>About!</App>} />
      </Routes>
  </BrowserRouter>
  </Web3ReactProvider>
);
