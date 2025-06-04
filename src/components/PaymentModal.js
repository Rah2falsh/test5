import React, { useState } from 'react';

const PaymentModal = ({ onClose }) => {
  const [selected, setSelected] = useState(null);

  const options = [
    { id: 'apple', label: 'Apple Pay', icon: 'bi-apple' },
    { id: 'cash', label: 'كاش', icon: 'bi-cash-stack' },
    { id: 'card', label: 'بطاقة', icon: 'bi-credit-card' },
  ];

  return (
    <div style={modalStyle}>
      <h2>اختر طريقة الدفع</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        {options.map(opt => (
          <div
            key={opt.id}
            onClick={() => setSelected(opt.id)}
            style={{
              ...paymentOptionStyle,
              borderColor: selected === opt.id ? '#305b7b' : '#ccc',
              backgroundColor: selected === opt.id ? '#e0f0ff' : 'white',
            }}
          >
            <i className={`bi ${opt.icon}`} style={{ fontSize: '48px', marginBottom: '10px' }}></i>
            <div>{opt.label}</div>
          </div>
        ))}
      </div>
      <button onClick={onClose} style={{ ...buttonStyle, marginTop: '30px' }}>
        إغلاق
      </button>
    </div>
  );
};

const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  padding: '30px',
  zIndex: 2000,
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0,0,0,0.25)',
  width: '90%',
  maxWidth: '400px',
  textAlign: 'center',
};

const paymentOptionStyle = {
  border: '2px solid #ccc',
  padding: '20px',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '18px',
  width: '110px',
  userSelect: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  transition: 'all 0.3s ease',
};

const buttonStyle = {
  backgroundColor: '#305b7b',
  color: 'white',
  border: 'none',
  padding: '10px 25px',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '16px',
  borderRadius: '5px',
};

export default PaymentModal;
