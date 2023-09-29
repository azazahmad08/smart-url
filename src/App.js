import React, { useState } from 'react';
import './App.css';
import InputShortener from './InputShortner';
import LinkResult from './LinkResult';
function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="App">
      <header className="header">
        <div className="site-name">
          <h1 className="site-title">Smart Url</h1>
        </div>
        <nav className="menu">
        <ul class="nav-links">
        <li><a href="#">Dashboard</a></li>
        <li class="center"><a href="#">Portfolio</a></li>
        <li class="upward"><a href="#">Services</a></li>
        <li class="forward"><a href="#">Feedback</a></li>
      </ul>
        </nav>
      </header>
      <div className="container">
      <InputShortener setInputValue={setInputValue} />
      
      <LinkResult inputValue={inputValue} />
    </div>
    </div>
  );
}

export default App;
