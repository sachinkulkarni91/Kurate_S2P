import React, { useState } from 'react';
import './SubmitInvoiceInquiry.css';

export default function SubmitInvoiceInquiry() {
  // Demo state for chips and fields
  const [entity, setEntity] = useState('Automated Logic Contracting Services, Inc., Delaware');
  const [invoiceNumber, setInvoiceNumber] = useState('INV564567');
  const [supplier, setSupplier] = useState('COMPAC SERVICES B.V.');
  const [supplierInList, setSupplierInList] = useState('Yes');
  const [inquiryType, setInquiryType] = useState('Invoice Status Query');
  const [description, setDescription] = useState("Please share status of the invoice 'INV564567'");

  return (
    <div className="sn-form-main-wrapper">
      <div className="sn-form-card">
        <div className="sn-form-header-row">
          <span className="sn-form-title">Submit an Invoice Inquiry</span>
        </div>
        <form className="sn-form-fields">
          {/* Entity */}
          <label className="sn-label">* Entity</label>
          <div className="sn-multiselect-input">
            <div className="sn-multiselect-top">
              <a href="#" className="sn-link-chip">Quick Guide - Entity Selection</a>
            </div>
            <div className="sn-multiselect-bottom">
              <span className="sn-chip-icon" aria-hidden="true"></span>
              <span className="sn-chip">{entity}
                <span className="sn-chip-close">×</span>
              </span>
            </div>
          </div>

          {/* Invoice Number */}
          <label className="sn-label">Invoice number</label>
          <div className="sn-helper-text">
            If there are multiple invoice numbers, please use the Description field or upload an Excel file containing all the invoice numbers as an attachment.
          </div>
          <input className="sn-input" value={invoiceNumber} onChange={e => setInvoiceNumber(e.target.value)} />

          {/* Supplier */}
          <label className="sn-label">* Supplier</label>
          <span className="sn-chip">{supplier}</span>

          {/* Supplier in List */}
          <label className="sn-label">* Is Supplier in the List?</label>
          <select className="sn-input" value={supplierInList} onChange={e => setSupplierInList(e.target.value)}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          {/* Inquiry Type */}
          <label className="sn-label">* Inquiry Type</label>
          <div className="sn-chip-row">
            <a href="#" className="sn-link-chip">Quick Guide - Inquiry Types</a>
            <span className="sn-chip">{inquiryType}</span>
          </div>
          <select className="sn-input" value={inquiryType} onChange={e => setInquiryType(e.target.value)}>
            <option value="Invoice Status Query">Invoice Status Query</option>
            <option value="Payment Status">Payment Status</option>
            <option value="Invoice Correction">Invoice Correction</option>
            <option value="Other">Other</option>
          </select>

          {/* Description */}
          <label className="sn-label">* Description</label>
          <textarea className="sn-input sn-textarea" rows={5} value={description} onChange={e => setDescription(e.target.value)} />
        </form>
      </div>
      <div className="sn-submit-panel">
        <button className="sn-submit-btn">Submit</button>
      </div>
    </div>
  );
}
