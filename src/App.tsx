import React from 'react';
import HeaderComponent from './HeaderComponent';
import SearchComponent from './SearchComponent';
import './assets/Main.css';

function App() {
  return (
    <div className="App">

      <div className="container">

        <h1>Hi. I'm Jayden. Online, i mostly go by ttj_ </h1>
        <HeaderComponent />

        <SearchComponent />
      </div>
    </div>
  );
}

export default App;
