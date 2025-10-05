import React, { useState } from 'react';
import './SubmitInvoiceInquiry.css';

export default function SubmitInvoiceInquiry() {
  const [entity, setEntity] = useState('Automated Logic Contracting Services, Inc., Delaware');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [supplier, setSupplier] = useState('');
  const [supplierInList, setSupplierInList] = useState('Yes');
  const [inquiryType, setInquiryType] = useState('');
  const [description, setDescription] = useState("Please share status of the invoice 'INV564567'");
  const [showHelper, setShowHelper] = useState(true);

  const requiredDefs = ['Entity', 'Supplier', 'Inquiry Type', 'Description'];

  const isComplete = (label) => {
    switch(label){
      case 'Entity': return !!entity;
      case 'Supplier': return !!supplier.trim();
      case 'Inquiry Type': return !!inquiryType;
      case 'Description': return !!description.trim();
      default: return true;
    }
  };

  const handleRemoveEntityGuide = () => setEntity('');
  const handleRemoveInquiryGuide = () => setInquiryType('');

  return (
    <div className="sn-layout-row">
      <div className="sn-form-col">
        <div className="sn-back-link">&larr; Back</div>
        <div className="sn-form-card full">
          <div className="sn-card-header">
            <h2 className="sn-card-title">Submit an Invoice Inquiry</h2>
            <div className="sn-card-actions">
              <button type="button" className="icon-btn" aria-label="favorite">♡</button>
              <button type="button" className="icon-btn" aria-label="collapse">▾</button>
            </div>
          </div>
          <div className="sn-card-body">
            <div className="sn-required-note"><span className="req-asterisk">*</span> Indicates required</div>

            {/* Entity Field */}
            <div className="field-block">
              <div className="field-label-row"><label className="field-label"><span className="req-asterisk">*</span> Entity</label><span className="info-icon" aria-hidden="true">i</span></div>
              <div className="multi-chip-box">
                {entity && (
                  <div className="chip blue-outline" role="button" tabIndex={0} aria-label="Remove entity selection help" onClick={handleRemoveEntityGuide} onKeyDown={e=>e.key==='Enter'&&handleRemoveEntityGuide()}>
                    Quick Guide - Entity Selection <span className="chip-close" aria-hidden>×</span>
                  </div>
                )}
                <div className="input-inline-controls">
                  <button type="button" className="dd-btn" aria-label="dropdown">▾</button>
                </div>
              </div>
            </div>

            {/* Invoice Number */}
            <div className="field-block">
              <div className="field-label-row"><label className="field-label">Invoice number</label><span className="info-icon" aria-hidden="true">i</span></div>
              <div className="input-wrapper with-btn">
                <input className="text-input" value={invoiceNumber} onChange={e=>setInvoiceNumber(e.target.value)} />
                <button type="button" className="dd-btn" aria-label="dropdown">▾</button>
              </div>
              {showHelper && (
                <div className="inline-helper">
                  <span>If there are multiple invoice numbers, please use the 'Description' field or upload an Excel file containing all the invoice numbers as an attachment.</span>
                  <button type="button" className="close-helper" onClick={()=>setShowHelper(false)}>×</button>
                </div>
              )}
            </div>

            {/* Supplier */}
            <div className="field-block">
              <div className="field-label-row"><label className="field-label"><span className="req-asterisk">*</span> Supplier</label></div>
              <div className="input-wrapper with-btn">
                <input className="text-input" value={supplier} onChange={e=>setSupplier(e.target.value)} />
                <button type="button" className="dd-btn" aria-label="dropdown">▾</button>
              </div>
            </div>

            {/* Supplier in List */}
            <div className="field-block">
              <div className="field-label-row"><label className="field-label"><span className="req-asterisk">*</span> Is Supplier in the List?</label></div>
              <div className="input-wrapper with-btn">
                <select className="text-input select" value={supplierInList} onChange={e=>setSupplierInList(e.target.value)}>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <button type="button" className="dd-btn" aria-label="dropdown" tabIndex={-1}>▾</button>
              </div>
            </div>

            {/* Inquiry Type */}
            <div className="field-block">
              <div className="field-label-row"><label className="field-label"><span className="req-asterisk">*</span> Inquiry Type</label><span className="info-icon" aria-hidden="true">i</span></div>
              <div className="multi-chip-box">
                {inquiryType && (
                  <div className="chip blue-outline" role="button" tabIndex={0} aria-label="Remove inquiry type help" onClick={handleRemoveInquiryGuide} onKeyDown={e=>e.key==='Enter'&&handleRemoveInquiryGuide()}>
                    Quick Guide - Inquiry Types <span className="chip-close" aria-hidden>×</span>
                  </div>
                )}
                <div className="input-inline-controls">
                  <button type="button" className="dd-btn" aria-label="dropdown">▾</button>
                </div>
              </div>
              <div className="input-wrapper with-btn top-gap-4">
                <select className="text-input select" value={inquiryType} onChange={e=>setInquiryType(e.target.value)}>
                  <option value="">-- None --</option>
                  <option value="Invoice Status Query">Invoice Status Query</option>
                  <option value="Payment Status">Payment Status</option>
                  <option value="Invoice Correction">Invoice Correction</option>
                  <option value="Other">Other</option>
                </select>
                <button type="button" className="dd-btn" aria-label="dropdown" tabIndex={-1}>▾</button>
              </div>
            </div>

            {/* Description */}
            <div className="field-block">
              <div className="field-label-row"><label className="field-label"><span className="req-asterisk">*</span> Description</label></div>
              <div className="rich-toolbar">
                <div className="toolbar-left">
                  <select className="toolbar-select">
                    <option>Paragraph</option>
                  </select>
                  <button type="button" className="tb-btn">B</button>
                  <button type="button" className="tb-btn">I</button>
                  <button type="button" className="tb-btn">•</button>
                  <button type="button" className="tb-btn">1.</button>
                  <button type="button" className="tb-btn">&lt;/&gt;</button>
                </div>
              </div>
              <textarea className="text-input textarea" rows={6} value={description} onChange={e=>setDescription(e.target.value)} />
            </div>

            <div className="attachments-row"><button type="button" className="link-btn">+ Add attachments</button></div>
          </div>
        </div>
      </div>
      <div className="sn-side-panel">
        <div className="submit-box"><button className="side-submit-btn">Submit</button></div>
        <div className="required-box">
          <div className="required-title">Required information</div>
          <div className="required-tags">
            {requiredDefs.map(tag => (
              <span key={tag} className={`req-tag ${isComplete(tag)?'done':''}`}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
