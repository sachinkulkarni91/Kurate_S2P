import React, { useState } from 'react';
import TopNavBar from './TopNavBar';

const initialForm = {
  entity: '',
  invoiceNumber: '',
  supplier: '',
  supplierInList: 'Yes',
  inquiryType: 'Invoice Status Query',
  description: '',
};

export default function SubmitInvoiceInquiryForm() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Inquiry submitted!');
  };

  return (
    <>
      <TopNavBar />
      <div className="breadcrumb">Home &gt; Procure-To-Pay &gt; Invoice & Payments &gt; Submit an Invoice Inquiry</div>
      <div className="page-container" style={{ maxWidth: 700 }}>
        <h2>Submit an Invoice Inquiry</h2>
        <form onSubmit={handleSubmit} className="form-section">
          <label>Entity</label>
          <input name="entity" value={form.entity} onChange={handleChange} required />

          <label>Invoice number</label>
          <input name="invoiceNumber" value={form.invoiceNumber} onChange={handleChange} required />

          <label>Supplier</label>
          <input name="supplier" value={form.supplier} onChange={handleChange} required />

          <label>Is Supplier in the List?</label>
          <select name="supplierInList" value={form.supplierInList} onChange={handleChange}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <label>Inquiry Type</label>
          <select name="inquiryType" value={form.inquiryType} onChange={handleChange}>
            <option value="Invoice Status Query">Invoice Status Query</option>
            <option value="Other">Other</option>
          </select>

          <label>Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} required />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
