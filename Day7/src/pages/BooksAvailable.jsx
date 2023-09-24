import React from 'react';
import Footer from '../components/Footer';
const BooksAvailable = () => {
  return (
    <div className='wrapper'>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12 d-flex flex-column align-items-center justify-content-center" style={{ height: "80vh" }}>
          <div className="align-items-center">
            <h2 className="mb-4">Books Available</h2>
          </div>
          <div>
            <p>Welcome to our Library Management System. Explore our collection of available books. You can check them out and enjoy a world of knowledge and stories.</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              consectetur ligula. Duis ac turpis in lacus maximus pulvinar a at
              sapien.
            </p>
          </div>
          <div>
            <p>
              Fusce auctor erat id ex iaculis, ut rhoncus nulla tincidunt. Integer
              volutpat arcu in ante cursus tincidunt.
            </p>
          </div>
        </div>
      </div>
    </div>
      <Footer/>
    </div>
  );
};

export default BooksAvailable;
