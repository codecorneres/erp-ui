import React from 'react';
import './TopBar.css';
import { menuItems } from '../../data/menu';

const TopBar = () => {
  const tabs = menuItems;

  return (
    <div className='top-bar'>
      <div className='tabs'>
        {tabs.map((tab) => (
          <button key={tab.id} className='tab-button'>
            <span className='tab-icon'>{tab.icon}</span>
            <span className='tab-label'>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopBar;
