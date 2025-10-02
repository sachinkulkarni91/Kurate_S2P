import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavBar from './TopNavBar';

const supportResources = [
  { title: 'Submit an Invoice Inquiry', description: 'Submit an Invoice Inquiry', route: '/submit-invoice-inquiry' },
  { title: 'Global Ariba Helpdesk', description: 'Global Ariba Helpdesk', route: '#' },
  { title: 'North America Payment Requests', description: 'VIP and Urgent cases of North America Payment Requests', route: '#' },
  { title: 'Submit a High Priority Invoice Inquiry', description: 'Track High Priority Invoice Inquiry', route: '#' },
  { title: 'Request Access', description: 'Access Request for Immediate Visibility and Submission of Source to Pay Catalog Items', route: '#' },
  { title: 'P6 T&E Claims', description: 'P6 T&E Claims', route: '#' },
  { title: 'Submit a Payment Request', description: 'Request vendor/non-vendor, and customer refund payments', route: '#' },
];

export default function InvoicePaymentsPage() {
  const navigate = useNavigate();
  return (
    <>
      <TopNavBar />
      <div className="breadcrumb">Home &gt; Procure-To-Pay &gt; Invoice & Payments</div>
      <div className="page-container">
        <h1>Invoice & Payments</h1>
        <p>Itemizing any goods and services that require payment</p>
        <div className="support-resources">
          {supportResources.map((res, idx) => (
            <div key={idx} className="resource-card">
              <h3>{res.title}</h3>
              <p style={{ color: '#6b7a99', fontSize: '0.98rem', marginBottom: 0 }}>{res.description}</p>
              <button onClick={() => res.route !== '#' && navigate(res.route)} disabled={res.route === '#'}>
                Request
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
