import React from 'react';

const Cart = ({ cartItems, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      backgroundColor: '#305b7b',
      color: 'white',
      padding: '15px',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      width: '300px'
    }}>
      <h3>السلة</h3>
      {cartItems.length === 0 ? (
        <p>السلة فارغة</p>
      ) : (
        <>
          <ul style={{ maxHeight: '150px', overflowY: 'auto' }}>
            {cartItems.map((item, idx) => (
              <li key={idx}>{item.name} - {item.price} ر.س</li>
            ))}
          </ul>
          <p style={{ fontWeight: 'bold' }}>المجموع: {total} ر.س</p>
          <button
            onClick={onCheckout}
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#254561',
              border: 'none',
              color: 'white',
              fontWeight: 'bold',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1b2f42'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#254561'}
          >
            انهاء الطلب
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
