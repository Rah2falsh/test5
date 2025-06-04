import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Navbar = ({ sidebarOpen, setSidebarOpen, onOpenPreviousOrders }) => {

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <>
      <nav style={{
        backgroundColor: '#305b7b',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'white'
      }}>
        <img
          src={process.env.PUBLIC_URL + '/imagess/basicLogo.jpg'}
          alt="Logo"
          width={150}
          height={150}
          style={{ borderRadius: '10px' }}
        />

        <span style={{ fontWeight: 'bold', fontSize: '28px', color: 'white', marginLeft: '15px', flexGrow: 1 }}>
          Yummy Crunch! Burger
        </span>

        <button
          onClick={toggleSidebar}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '60px',
            cursor: 'pointer',
          }}
          aria-label="زر القائمة"
        >
          &#9776;
        </button>
      </nav>

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onOpenPreviousOrders={onOpenPreviousOrders}
      />
    </>
  );
};

export default Navbar;

