import React from 'react';

const BooksInReturn = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12 d-flex flex-column align-items-center justify-content-center" style={{ height: "80vh" }}>
          <div className="align-items-center">
            <h2 className="mb-4">Books to Return</h2>
          </div>
          <div>
            <p>Welcome to our Library Management System. If you have borrowed books from our library, please make sure to return them on or before their due date to avoid late fees and inconveniences to other users.</p>
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
  );
};

export default BooksInReturn;
