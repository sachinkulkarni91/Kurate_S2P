import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import SubmitInvoiceInquiry from './components/SubmitInvoiceInquiry';
import './components/Header.css';
import './components/SubmitInvoiceInquiry.css';


function App() {
  return (
    <>
      <Header />
      <SubmitInvoiceInquiry />
    </>
  );
}

export default App;
