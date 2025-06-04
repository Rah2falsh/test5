import React from 'react';

const OrderSummaryModal = ({ orderItems, onClose, onNext }) => {
  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2 style={titleStyle}>ملخص الطلب</h2>
        <ul style={listStyle}>
          {orderItems.map(item => (
            <li key={item.id} style={itemStyle}>
              {item.name} × {item.quantity}
            </li>
          ))}
        </ul>
        <div style={buttonContainer}>
          <button style={buttonStyle} onClick={onClose}>إغلاق</button>
          <button style={nextButtonStyle} onClick={onNext}>التالي</button>
        </div>
      </div>
    </div>
  );
};

const overlayStyle = {
  position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.4)',
  display: 'flex', justifyContent: 'center', alignItems: 'center',
  zIndex: 2000,
};

const modalStyle = {
  backgroundColor: 'white',
  borderRadius: '8px',
  padding: '25px',
  width: '90%',
  maxWidth: '400px',
  boxShadow: '0 0 15px rgba(0,0,0,0.3)',
  fontFamily: 'Arial, sans-serif',
  color: '#222',
  textAlign: 'right',
};

const titleStyle = {
  marginBottom: '20px',
  fontWeight: 'bold',
  fontSize: '22px',
  color: '#305b7b',
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
  marginBottom: '25px',
};

const itemStyle = {
  padding: '8px 0',
  borderBottom: '1px solid #ddd',
  fontSize: '18px',
};

const buttonContainer = {
  display: 'flex',
  justifyContent: 'space-between',
};

const buttonStyle = {
  backgroundColor: '#888',
  color: 'white',
  border: 'none',
  padding: '10px 25px',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '16px',
};

const nextButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#305b7b',
};

export default OrderSummaryModal;
