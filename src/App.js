import React from 'react';
import logo from './logo2.png';
import './App.css';
import DetectorVideo from './components/DetectorVideo';

function App() {
  return (
    <>
    
      <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p className="App-subheading">TensorFlow Object Recognition</p>
        <header className="App-header">
          <DetectorVideo />
          <p>
            Tensorflow demo.
        </p>
        </header>
      </div>
    </>
  );
}

export default App;
