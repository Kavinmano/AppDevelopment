import React from 'react';
import Footer from '../components/Footer';
import bg from '../assets/css/pic8.jpg';
const TermsConditions = () => {
  return (
    <div className='wrapper d-flex flex-column'style={{ minHeight: '100vh' }}>
    <div className='auth-container' style={{backgroundImage: `url(${bg})`,backgroundPosition: "center", backgroundSize: "cover"}}>

    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <h2>Terms and Conditions</h2>
          <p>Welcome to our Library Management System. By using this system, you agree to the following terms and conditions:</p>
          <ol>
            <li>
              <p>You must be a registered library member to access our services. Registration is free but requires providing accurate personal information.</p>
            </li>
            <li>
              <p>All library materials, including books, digital media, and equipment, are for educational and personal use only. Unauthorized distribution or reproduction is prohibited.</p>
            </li>
            <li>
              <p>Library users are responsible for returning borrowed materials on or before the due date. Overdue materials may incur fines.</p>
            </li>
            <li>
              <p>Respectful behavior is expected from all users. Any form of harassment, vandalism, or disruptive conduct will not be tolerated.</p>
            </li>
            <li>
              <p>Protect your account credentials and do not share them with others. You are responsible for any activity that occurs under your account.</p>
            </li>
            <li>
              <p>Privacy of user data is important to us. We collect and use your information in accordance with our Privacy Policy.</p>
            </li>
            <li>
              <p>We reserve the right to modify these terms and conditions at any time. Users will be notified of any changes.</p>
            </li>
          </ol>
        </div>
      </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default TermsConditions;
