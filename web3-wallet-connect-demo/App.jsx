import React, { useState } from 'react';
import { ethers } from 'ethers';

export default function App() {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert('Please install MetaMask!');
      return;
    }
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Connect Wallet Demo</h2>
      <button onClick={connectWallet}>Connect MetaMask</button>
      {account && <p>Connected account: {account}</p>}
    </div>
  );
}