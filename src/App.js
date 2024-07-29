import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaymentPage from './components/payment/PaymentPage';
import PaymentCard from './components/paymentcard/PaymentCard'
import './App.css';
import FirstBox from "./components/avista/AvistaBox";
import OtherBox from "./components/parcelado/ParceladoBox";

function App() {
  return (
    <div className="App">
      <div className='main'>
      <img alt="Logo Woovi" 
        src="https://woovi.com/_next/static/media/woovi-logo.1612aac8.webp" 
        style={{width: 150, display: "block", margin: "auto"}}
      />
         <Router>
            <Routes>
                <Route path="/" element={<><FirstBox /><OtherBox /></>} />
                <Route path="/pay" element={<PaymentPage />} />
                <Route path="/paycard" element={<PaymentCard />} />
            </Routes>
        </Router>
        
      </div>
    </div>
  );
}

export default App;