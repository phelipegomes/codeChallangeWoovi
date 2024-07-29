import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
/* import PaymentPage from './components/card/Card';
import PaymentCard from './components/paymentcard/PaymentCard'; */
import Payment from './components/payment/Payment';

export default function App() {
  return (
         <Router>
            <Routes>
                <Route path="/" element={<Payment />} />
                {/* <Route path="/pay" element={<PaymentPage />} />
                <Route path="/paycard" element={<PaymentCard />} /> */}
            </Routes>
        </Router>
  );
}
