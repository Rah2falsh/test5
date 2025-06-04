import React from 'react';

const InvoiceModal = ({ orderItems, onClose, onNext }) => {
  // نحسب مجموع كل صنف (كمية × سعر الوحدة) بالفعل موجود في totalPrice
  const subtotal = orderItems.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        {/* عنوان */}
        <h2 style={titleStyle}>تفاصيل الطلب</h2>

        {/* جدول الأصناف */}
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>الصنف</th>
              <th style={thStyle}>الكمية</th>
              <th style={thStyle}>السعر (ر.س)</th>
            </tr>
          </thead>
          <tbody>
            {orderItems.map((item) => (
              <tr key={item.id}>
                <td style={tdStyle}>{item.name}</td>
                <td style={tdStyle}>{item.quantity}</td>
                <td style={tdStyle}>{item.totalPrice.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* المجموع الكلي فقط */}
        <div style={summaryStyle}>
          <span>الإجمالي:</span>
          <span style={totalStyle}>{subtotal.toFixed(2)} ر.س</span>
        </div>

        {/* أزرار */}
        <div style={buttonContainerStyle}>
          <button style={buttonStyle} onClick={onClose}>إغلاق</button>
          <button style={nextButtonStyle} onClick={onNext}>التالي</button>
        </div>
      </div>
    </div>
  );
};

// ستايلات
const overlayStyle = {
  position: 'fixed',
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.3)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 2000,
};

const modalStyle = {
  backgroundColor: 'white',
  borderRadius: '8px',
  padding: '25px 30px',
  width: '90%',
  maxWidth: '500px',
  boxShadow: '0 0 15px rgba(0,0,0,0.2)',
  fontFamily: 'Arial, sans-serif',
  color: '#222',
};

const titleStyle = {
  marginBottom: '20px',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '24px',
  color: '#305b7b',
  borderBottom: '2px solid #305b7b',
  paddingBottom: '10px',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginBottom: '20px',
};

const thStyle = {
  borderBottom: '2px solid #305b7b',
  padding: '10px',
  textAlign: 'right',
  backgroundColor: '#e9f0ff',
};

const tdStyle = {
  borderBottom: '1px solid #ccc',
  padding: '10px',
  textAlign: 'right',
};

const summaryStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  fontWeight: 'bold',
  fontSize: '18px',
  paddingTop: '10px',
  borderTop: '2px solid #305b7b',
};

const totalStyle = {
  color: '#305b7b',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '25px',
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

export default InvoiceModal;
