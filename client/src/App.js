// client/src/App.js
import React from 'react';
import './App.css';
import NewFeature from './components/NewFeature'; // New feature component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My MERN App</h1>
        <NewFeature /> {/* Use the new feature component */}
      </header>
    </div>
  );
}

export default App;
