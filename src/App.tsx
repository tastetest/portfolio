import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import SearchComponent from './components/SearchComponent';
import './assets/Main.css';

function App() {
  return (
    <div className="App">

      <div className="container">

        <HeaderComponent />
        <SearchComponent />
      </div>
    </div>
  );
}

export default App;
