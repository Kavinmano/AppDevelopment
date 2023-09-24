import React from 'react';

const Faq = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <h2>Frequently Asked Questions</h2>
          <p>Welcome to our Frequently Asked Questions (FAQ) section for the Library Management System.</p>
          <h3>1. How do I borrow books?</h3>
          <p>
            To borrow books, you need to have a valid library membership. Simply visit our library, select the books you want, and check them out at the front desk.
          </p>
          <h3>2. How long can I keep borrowed books?</h3>
          <p>
            The loan period for books is typically two weeks. You can renew your books online or at the library if no one else has reserved them.
          </p>
          <h3>3. How can I reserve books?</h3>
          <p>
            To reserve books, search for the book you want in our catalog and click the "Reserve" button. You will be notified when the book becomes available.
          </p>
          <h3>4. What should I do if I lose a book?</h3>
          <p>
            If you lose a book, please report it to the library immediately. You will be responsible for replacing the lost book or paying for its replacement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
