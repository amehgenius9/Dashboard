import React from 'react'
import './App.css';
import SideNavigation from './components/SideNavigation';
import DashboardBody from './components/DashboardBody';

function App() {
  return (
    <div className="App">
      <SideNavigation />
      <DashboardBody />
    </div>
  );
}

export default App;
