import React, { useState } from 'react';
import { menuItems } from '../../data/menu';
import './Sidebar.css';

const Sidebar = () => {
  const [expandedMenus, setExpandedMenus] = useState(['routine']);
  const [activeItem, setActiveItem] = useState(null);

  const handleMenuToggle = (menuId) => {
    setExpandedMenus((prev) =>
      prev.includes(menuId)
        ? prev.filter((id) => id !== menuId)
        : [...prev, menuId]
    );
  };

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };

  const renderMenuItem = (menu) => {
    const isExpanded = expandedMenus.includes(menu.id);
    const hasChildren = menu.children && menu.children.length > 0;

    return (
      <div key={menu.id} className='menu-group'>
        <button
          className={`menu-item ${hasChildren ? 'has-children' : ''}`}
          onClick={() => hasChildren && handleMenuToggle(menu.id)}
        >
          {hasChildren && (
            <span className='expand-icon'>{isExpanded ? '−' : '+'}</span>
          )}
          <span className='menu-icon'>{menu.icon}</span>
          <span className='menu-label'>{menu.label}</span>
        </button>

        {isExpanded && hasChildren && (
          <div className='menu-children'>
            {menu.children.map((child) => (
              <button
                key={child.id}
                className={`menu-child ${
                  activeItem === child.id ? 'active' : ''
                }`}
                onClick={() => handleItemClick(child.id)}
              >
                <span className='menu-icon'>{child.icon}</span>
                <span className='menu-label'>{child.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className='sidebar'>
      <div className='menu-list'>
        {menuItems.map((menu) => renderMenuItem(menu))}
      </div>
    </div>
  );
};

export default Sidebar;
