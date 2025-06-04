import React from 'react';



const MenuItem = ({ item, onAddToCart }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      width: '250px',
      padding: '15px',
      textAlign: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <img
        src={item.image}
        alt={item.name}
        style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '10px' }}
      />
      <h3>{item.name}</h3>
      <p style={{ fontSize: '14px', color: '#555' }}>{item.description}</p>
      <p style={{ fontWeight: 'bold' }}>السعر: {item.price} ر.س</p>
      <button
        className="button-interactive"
        onClick={() => onAddToCart(item)}
        style={{
          padding: '10px 20px',
          backgroundColor: '#305b7b',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '16px',
          transition: 'background-color 0.3s ease'
        }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#254561'}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#305b7b'}
      >
        أضف إلى السلة
      </button>
    </div>
  );
};

export default MenuItem;
