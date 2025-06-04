import React from 'react';

const FinalInvoiceModal = ({ orderItems, customerInfo, onClose, onPay }) => {
  const subtotal = orderItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const tax = subtotal * 0.15;
  const total = subtotal + tax;

  return (
    <div style={modalStyle}>
      <h2>فاتورة الطلب</h2>
      <p><strong>العميل:</strong> {customerInfo.name} - {customerInfo.phone}</p>
      <ul style={{ maxHeight: '200px', overflowY: 'auto' }}>
        {orderItems.map(item => (
          <li key={item.id}>{item.name} × {item.quantity} = {item.totalPrice.toFixed(2)} ر.س</li>
        ))}
      </ul>
      <p>المجموع بدون ضريبة: {subtotal.toFixed(2)} ر.س</p>
      <p>الضريبة (15%): {tax.toFixed(2)} ر.س</p>
      <p><strong>الإجمالي: {total.toFixed(2)} ر.س</strong></p>

      <button onClick={onPay} style={buttonStyle}>الدفع</button>
      <button onClick={onClose} style={{ ...buttonStyle, backgroundColor: '#ccc', marginTop: '10px' }}>إغلاق</button>
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

const buttonStyle = {
  backgroundColor: '#305b7b',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '16px',
  borderRadius: '5px',
};

export default FinalInvoiceModal;

  