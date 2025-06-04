import React from 'react';
import MenuItem from './MenuItem';

const MenuList = ({ items, onAddToCart }) => {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      padding: '20px',
      justifyContent: 'center'
    }}>
      {items.map(item => (
        <MenuItem key={item.id} item={item} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default MenuList;
