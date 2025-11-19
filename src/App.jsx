import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Bitcoin from './pages/Bitcoin';
import Web3Wallet from './pages/Web3Wallet';
import Multichains from './pages/Multichains';
import DeFi from './pages/DeFi';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bitcoin" element={<Bitcoin />} />
        <Route path="/web3-wallet" element={<Web3Wallet />} />
        <Route path="/multichains" element={<Multichains />} />
        <Route path="/defi" element={<DeFi />} />
      </Routes>
    </Layout>
  );
}

export default App;
