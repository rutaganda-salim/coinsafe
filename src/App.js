import "./App.css";
import { useState } from "react";
import logo from './moralisLogo.svg';
import { Select } from 'antd';
import { Routes, Route} from 'react-router-dom'
import Home from './components/Home';
function App() {
  const [selectedChain, setSelectedChain] = useState('0x1');


  return (
    
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <Select
          onChange={(val) => setSelectedChain(val)}
          value={selectedChain}
          options={[
            {
              label: 'Ethereum',
              value: '0x1',
            },
            {
              label: 'Mumbai Testnet',
              value: '0x13881',
            },
            {
              label: 'Polygon',
              value: '0x89',
            },
            {
              label: 'Avalanche',
              value: '0xa86a',
            },
          ]}
          className="dropdown"
        >

        </Select>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App; 