import React from 'react';
import TopBar from './components/Layout/TopBar';
import Sidebar from './components/Layout/Sidebar';
import SalesOrder from './components/SalesOrder';
import './App.css';

function App() {
  return (
    <div className='app'>
      <TopBar />
      <div className='main-container'>
        <Sidebar />
        <div className='content'>
          <SalesOrder />
        </div>
      </div>
    </div>
  );
}

export default App;
