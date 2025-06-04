import React, { useState } from 'react';

const CustomerInfoModal = ({ onSubmit, onCancel }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleNext = () => {
    if (name.trim() === '' || phone.trim() === '') {
      alert('يرجى إدخال الاسم ورقم الجوال');
      return;
    }
    onSubmit({ name, phone });
  };

  return (
    <div style={modalStyle}>
      <h2>بيانات العميل</h2>
      <input
        type="text"
        placeholder="الاسم"
        value={name}
        onChange={e => setName(e.target.value)}
        style={inputStyle}
      />
      <input
        type="tel"
        placeholder="رقم الجوال"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        style={inputStyle}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <button onClick={onCancel} style={buttonStyle}>
          العودة
        </button>
        <button onClick={handleNext} style={buttonStyle}>
          التالي
        </button>
      </div>
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
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '10px 0',
  fontSize: '16px',
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

export default CustomerInfoModal;
