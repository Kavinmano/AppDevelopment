import React from 'react';
import Footer from '../components/Footer';
const ContactUs = () => {
  return (
    <div className='wrapper'>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12 d-flex flex-column align-items-center justify-content-center" style={{ height: "80vh" }}>
          <div className="align-items-center">
            <h2 className="mb-4">Contact Us</h2>
          </div>
          <div>
            <p>Welcome to our Library Management System. If you have any questions, comments, or concerns, please don't hesitate to reach out to us. We are here to assist you.</p>
          </div>
          <div>
            <p>
              You can contact us via email at <a href="mailto:contact@example.com">contact@example.com</a> or by phone at +1 (123) 456-7890.
            </p>
          </div>
        </div>
      </div>
    </div>
      <Footer/>
    </div>
  );
};

export default ContactUs;
