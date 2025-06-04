import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { HashRouter as Router } from 'react-router-dom';

import MenuList from './components/MenuList';
import Cart from './components/Cart';
import CustomerInfoModal from './components/CustomerInfoModal';
import InvoiceModal from './components/InvoiceModal';
import FinalInvoiceModal from './components/FinalInvoiceModal';
import PaymentModal from './components/PaymentModal';
import PreviousOrdersModal from './components/PreviousOrdersModal';  // استيراد المودال الجديد
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const [showCustomerInfo, setShowCustomerInfo] = useState(false);
  const [showInvoice, setShowInvoice] = useState(false);
  const [showFinalInvoice, setShowFinalInvoice] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  const [showPreviousOrdersModal, setShowPreviousOrdersModal] = useState(false);
  const [previousOrders, setPreviousOrders] = useState([]);
  const [showPreparingMessage, setShowPreparingMessage] = useState(false); // حالة لعرض رسالة التحضير

  const [groupedItems, setGroupedItems] = useState([]);
  const [customerInfo, setCustomerInfo] = useState(null);

  const menuItems = [
    {
      id: 1,
      name: 'سيجنتشر برجر',
      description: 'قطعة من لحم الانجوس الفاخر مع الصلصة وجبنة التشيدر',
      price: 28,
      image: process.env.PUBLIC_URL + '/imagess/signn.jpg',
    },
    {
      id: 2,
      name: 'دبل بيف برجر',
      description: 'قطعتان من اللحم المشوي مع الجبنة الفرنسية والخس',
      price: 26,
      image: process.env.PUBLIC_URL + '/imagess/prud2.jpg',
    },
    {
      id: 3,
      name: 'دبل تشيكن برجر',
      description: 'قطعتان من الدجاج المشوي مع الصلصة الفاخرة',
      price: 24,
      image: process.env.PUBLIC_URL + '/imagess/prud3.jpg',
    },
    {
      id: 4,
      name: 'ميبل برجر',
      description: 'شريحة دجاج مقلية مع صلصة الميبل الحارة',
      price: 25,
      image: process.env.PUBLIC_URL + '/imagess/prud4.jpg',
    },
    {
      id: 5,
      name: 'سلايدر تشيكن',
      description: 'ثلاثة قطع برجر سلايدر تشيكن',
      price: 22,
      image: process.env.PUBLIC_URL + '/imagess/prud5.jpg',
    },
    {
      id: 6,
      name: 'مكس كرانش فرايز',
      description: 'قطع البطاطس المقرمشة مع اللحم المفروم والجبنة',
      price: 18,
      image: process.env.PUBLIC_URL + '/imagess/prud6.jpg',
    },
    {
      id: 7,
      name: 'كلاسيك فرايز',
      description: 'قطع البطاطس المقرمشة المملحة',
      price: 7,
      image: process.env.PUBLIC_URL + '/imagess/prud7.jpg',
    },
    {
      id: 8,
      name: 'أصابع موزريلا',
      description: 'ثلاثة أصابع من جبنة الموازريلا المقلية مع صلصة جانبية',
      price: 13,
      image: process.env.PUBLIC_URL + '/imagess/prud8.jpg',
    },
    {
      id: 9,
      name: 'سفن اب',
      description: 'مشروب غازي بارد',
      price: 5,
      image: process.env.PUBLIC_URL + '/imagess/sfnn.jpg',
    },
    {
      id: 10,
      name: 'بيبسي',
      description: 'مشروب غازي بارد',
      price: 5,
      image: process.env.PUBLIC_URL + '/imagess/prud9.jpg',
    },
    {
      id: 11,
      name: 'ماء',
      description: 'مياه معدنية باردة',
      price: 3,
      image: process.env.PUBLIC_URL + '/imagess/prud11.jpg',
    },
  ];

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleCheckoutClick = () => {
    if (cartItems.length === 0) {
      alert('السلة فارغة، الرجاء إضافة أصناف.');
      return;
    }
    setShowCustomerInfo(true);
  };

  const handleCustomerInfoSubmit = (info) => {
    setCustomerInfo(info);
    setShowCustomerInfo(false);

    const grouped = cartItems.reduce((acc, item) => {
      const existingItem = acc.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += item.price;
      } else {
        acc.push({ ...item, quantity: 1, totalPrice: item.price });
      }
      return acc;
    }, []);
    setGroupedItems(grouped);

    setShowInvoice(true); // عرض الفاتورة مباشرة بعد إضافة بيانات العميل
  };

  const handleCustomerInfoCancel = () => {
    setShowCustomerInfo(false);
  };

  const handleCloseInvoice = () => {
    setShowInvoice(false);
  };

  const handleNext = () => {
    setShowInvoice(false);
    setShowFinalInvoice(true);
  };

  const handlePay = () => {
    setShowFinalInvoice(false);
    setShowPayment(true);
  };

  const handleClosePayment = () => {
    setShowPayment(false);

    const newOrder = {
      items: groupedItems,
      customer: customerInfo,
      date: new Date().toLocaleString(),
    };
    setPreviousOrders(prev => [...prev, newOrder]);

    setCartItems([]);
    setGroupedItems([]);
    setCustomerInfo(null);

    // إظهار الرسالة "جاري تحضير الطلب" عند إغلاق المودال
    setShowPreparingMessage(true);
    setTimeout(() => {
      setShowPreparingMessage(false);
    }, 3000);  // عرض الرسالة لمدة 3 ثواني
  };

  const handleOpenPreviousOrders = () => {
    setShowPreviousOrdersModal(true);
    setSidebarOpen(false);
  };

  return (
    <div>
      <Navbar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onOpenPreviousOrders={handleOpenPreviousOrders}
      />
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onOpenPreviousOrders={handleOpenPreviousOrders}
      />
      <MenuList items={menuItems} onAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} onCheckout={handleCheckoutClick} />

      {showCustomerInfo && (
        <CustomerInfoModal
          onSubmit={handleCustomerInfoSubmit}
          onCancel={handleCustomerInfoCancel}
        />
      )}

      {showInvoice && (
        <InvoiceModal
          orderItems={groupedItems}
          onClose={handleCloseInvoice}
          onNext={handleNext}
        />
      )}

      {showFinalInvoice && (
        <FinalInvoiceModal
          orderItems={groupedItems}
          onClose={() => setShowFinalInvoice(false)}
          customerInfo={customerInfo}
          onPay={handlePay}
        />
      )}

      {showPayment && (
        <PaymentModal onClose={handleClosePayment} />
      )}

      {showPreviousOrdersModal && (
        <PreviousOrdersModal
          orders={previousOrders}
          onClose={() => setShowPreviousOrdersModal(false)}
        />
      )}

      {/* نافذة صغيرة بعد إغلاق الدفع */}
      {showPreparingMessage && (
        <div style={preparingMessageStyle}>
          جاري تحضير الطلب، بالعافية عليك!
        </div>
      )}
    </div>
  );
}

const preparingMessageStyle = {
  position: 'fixed',
  top: '20px', // جعلها في الأعلى
  left: '50%', // وسط الشاشة
  transform: 'translateX(-50%)', // تعديل لتكون بالضبط في المنتصف
  backgroundColor: '#305b7b',
  color: 'white',
  padding: '20px 40px', // حجم أكبر للرسالة
  borderRadius: '10px',
  boxShadow: '0 0 20px rgba(0,0,0,0.3)',
  fontWeight: 'bold',
  fontSize: '18px', // حجم أكبر للنص
  zIndex: 3000,
  userSelect: 'none',
  textAlign: 'center', // لتوسيط النص
};


export default App;
