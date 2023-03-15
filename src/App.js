import React from 'react'
import './App.css';
import Header from './components/Header';
import SideNavigation from './components/SideNavigation';

function App() {
  return (
    <div className="App">
      <SideNavigation />
      <Header />
    </div>
  );
}

export default App;
