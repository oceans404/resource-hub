import React from 'react';
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
        <Route path="/" element={<App />} />
        <Route path="uploader" element={<div>uploader</div>} />
      </Routes>
  </BrowserRouter>
  </Web3ReactProvider>
);
