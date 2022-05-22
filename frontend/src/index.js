import React, { useState } from 'react';
import 'flowbite';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import UploadPage from './pages/Upload';

function getLibrary(provider) {
  return new Web3Provider(provider);
}

const container = document.getElementById('root');
const root = createRoot(container);

function Index() {
  const [account, setAccount] = useState(null);

  const updateAccount = (newAccount) => {
    setAccount(newAccount);
  };

  return (
    <BrowserRouter>
      <div>
        <App updateAccount={updateAccount} />
        <div className='container mx-auto px-2 sm:px-4 py-2.5'>
          <Routes>
            <Route path='/' element={<UploadPage account={account} />} />
            <Route path='uploader' element={<UploadPage account={account} />} />
            <Route path='about' element={<div>about</div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

root.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <Index />
  </Web3ReactProvider>
);
