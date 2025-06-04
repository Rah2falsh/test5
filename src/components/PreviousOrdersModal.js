import React from 'react';

const PreviousOrdersModal = ({ orders, onClose }) => {
  return (
    <div style={modalStyle}>
      <h2>طلباتي السابقة</h2>
      {orders.length === 0 ? (
        <p>لا توجد طلبات سابقة</p>
      ) : (
        <ul style={{ maxHeight: '300px', overflowY: 'auto' }}>
          {orders.map((order, index) => (
            <li key={index} style={{ marginBottom: '15px' }}>
              <strong>طلب #{index + 1} - التاريخ: {order.date || 'غير متوفر'}</strong>
              <ul>
                {order.items.map((item, i) => (
                  <li key={i}>
                    {item.name} × {item.quantity} = {item.totalPrice.toFixed(2)} ر.س
                  </li>
                ))}
              </ul>
              <hr />
            </li>
          ))}
        </ul>
      )}
      <button onClick={onClose} style={buttonStyle}>إغلاق</button>
    </div>
  );
};

const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  padding: '25px',
  zIndex: 2000,
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0,0,0,0.3)',
  width: '90%',
  maxWidth: '400px',
};

const buttonStyle = {
  backgroundColor: '#305b7b',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  cursor: 'pointer',
  fontWeight: 'bold',
  borderRadius: '5px',
  marginTop: '10px',
};

export default PreviousOrdersModal;
