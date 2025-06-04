import React, { useState } from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa'; // استيراد أيقونات الهاتف والإيميل

const Sidebar = ({ isOpen, onClose, onOpenPreviousOrders }) => {
  const [showLoginModal, setShowLoginModal] = useState(false); // حالة لفتح نافذة تسجيل الدخول
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false); // حالة لعرض الرسالة الترحيبية
  const [userName, setUserName] = useState(""); // لتخزين الاسم المدخل من قبل المستخدم
  const [showContactInfo, setShowContactInfo] = useState(false); // حالة لعرض "تواصل معنا" عند الضغط عليه

  // دالة لفتح مودال تسجيل الدخول
  const handleShowLogin = () => setShowLoginModal(true);
  
  // دالة لإغلاق مودال تسجيل الدخول
  const handleCloseLogin = () => setShowLoginModal(false);

  // دالة لإرسال بيانات المستخدم
  const handleLoginSubmit = (e) => {
    e.preventDefault(); // لمنع إرسال النموذج
    setShowLoginModal(false); // إغلاق المودال
    setShowWelcomeMessage(true); // عرض رسالة الترحيب

    // إخفاء الرسالة بعد 5 ثواني
    setTimeout(() => {
      setShowWelcomeMessage(false);
    }, 5000); // 5000 ميلي ثانية (أي 5 ثواني)
  };

  // دالة لفتح تواصل معنا
  const handleOpenContact = () => {
    setShowContactInfo(true); // عرض تواصل معنا
    setShowLoginModal(false); // إغلاق تسجيل الدخول إذا كان مفتوحًا
  };

  return (
    <>
      {/* الخلفية الشفافة التي تظهر عند فتح السايدبار */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? 'visible' : 'hidden',
          transition: 'opacity 0.3s ease',
          zIndex: 999,
        }}
      />

      {/* النافذة الجانبية */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: isOpen ? 0 : '-250px',
          width: '250px',
          height: '100%',
          backgroundColor: 'white',
          boxShadow: '-2px 0 5px rgba(0,0,0,0.3)',
          transition: 'right 0.3s ease',
          zIndex: 1000,
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* زر إغلاق السايدبار */}
        <button
          onClick={onClose}
          style={{
            alignSelf: 'flex-start',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            marginBottom: '20px',
          }}
          aria-label="إغلاق القائمة"
        >
          &times;
        </button>

        {/* روابط النافبار الجانبي */}
        <a
          href="/orders"
          style={{
            marginBottom: '15px',
            color: '#305b7b',
            textDecoration: 'none',
            fontSize: '26px',
          }}
        >
          طلباتي السابقة
        </a>
        <a
          href="#"
          onClick={handleShowLogin}  // فتح مودال تسجيل الدخول
          style={{
            marginBottom: '15px',
            color: '#305b7b',
            textDecoration: 'none',
            fontSize: '26px',
          }}
        >
          تسجيل الدخول
        </a>
        <a
          href="#"
          onClick={handleOpenContact} // فتح تواصل معنا
          style={{
            marginBottom: '15px',
            color: '#305b7b',
            textDecoration: 'none',
            fontSize: '26px',
          }}
        >
          تواصل معنا
        </a>
      </div>

      {/* نافذة مودال تسجيل الدخول */}
      {showLoginModal && !showWelcomeMessage && (
        <div style={loginModalStyle}>
          <div style={modalContentStyle}>
            <button 
              style={closeButtonStyle} 
              onClick={handleCloseLogin}>إغلاق</button>
            <h3 style={modalTitleStyle}>تسجيل الدخول</h3>

            <form onSubmit={handleLoginSubmit}>
              <div style={inputGroupStyle}>
                <label htmlFor="username" style={labelStyle}>الاسم:</label>
                <input
                  type="text"
                  id="username"
                  placeholder="أدخل اسمك"
                  style={inputStyle}
                  onChange={(e) => setUserName(e.target.value)}  // تحديث اسم المستخدم
                />
              </div>

              <div style={inputGroupStyle}>
                <label htmlFor="phone" style={labelStyle}>رقم الجوال:</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="أدخل رقم الجوال"
                  style={inputStyle}
                />
              </div>

              <button type="submit" style={submitButtonStyle}>تسجيل الدخول</button>
            </form>
          </div>
        </div>
      )}

      {/* رسالة الترحيب بعد تسجيل الدخول */}
      {showWelcomeMessage && (
        <div style={welcomeMessageStyle}>
          <h3>تم التسجيل! نورتنا يا {userName}</h3>
        </div>
      )}

      {/* نافذة تواصل معنا */}
      {showContactInfo && (
        <div style={contactInfoStyle}>
          <h3>تواصل معنا</h3>
          <div style={contactItemStyle}>
            <FaEnvelope style={iconStyle} />
            <p style={textStyle}>yummycrunch@gmail.com</p>
          </div>
          <div style={contactItemStyle}>
            <FaPhone style={iconStyle} />
            <p style={textStyle}>05008586033</p>
          </div>
          <button
            onClick={() => setShowContactInfo(false)}
            style={closeButtonStyle}
          >
            إغلاق
          </button>
        </div>
      )}
    </>
  );
};

// ستايلات المودال
const loginModalStyle = {
  position: 'fixed',
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalContentStyle = {
  backgroundColor: 'white',
  padding: '30px',
  borderRadius: '8px',
  width: '90%',
  maxWidth: '500px',
  boxShadow: '0 0 20px rgba(0,0,0,0.2)',
  textAlign: 'center',
};

const closeButtonStyle = {
  background: 'none',
  border: 'none',
  fontSize: '20px',
  cursor: 'pointer',
  color: '#305b7b',
  fontWeight: 'bold',
  marginBottom: '15px',
};

const modalTitleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px',
};

const inputGroupStyle = {
  marginBottom: '15px',
  textAlign: 'right',
};

const labelStyle = {
  display: 'block',
  fontSize: '18px',
  marginBottom: '5px',
};

const inputStyle = {
  padding: '10px',
  width: '100%',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const submitButtonStyle = {
  backgroundColor: '#305b7b',
  color: 'white',
  border: 'none',
  padding: '10px 25px',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '18px',
  borderRadius: '5px',
};

const welcomeMessageStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#305b7b',
  color: 'white',
  padding: '30px 60px',
  borderRadius: '10px',
  boxShadow: '0 0 20px rgba(0,0,0,0.2)',
  fontSize: '24px',
  textAlign: 'center',
  zIndex: 2000,
};

// ستايلات نافذة تواصل معنا
const contactInfoStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  color: '#305b7b',
  padding: '30px 60px',
  borderRadius: '10px',
  boxShadow: '0 0 20px rgba(0,0,0,0.2)',
  fontSize: '20px',
  textAlign: 'center',
  zIndex: 2000,
};

const contactItemStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '15px',
};

const iconStyle = {
  marginRight: '10px',
  fontSize: '24px',
};

const textStyle = {
  fontSize: '20px',
  margin: '0',
};

export default Sidebar;

