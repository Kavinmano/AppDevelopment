import React from 'react';
import Footer from '../components/Footer';
const ReserveBooks = () => {
  return (
    <div className='wrapper'>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <h2>Reserve Books</h2>
          <p>Welcome to our Hogward's Library Management System. You can use this page to reserve books from our library.</p>
          <p>
          To reserve a book, simply wave your digital wand (or click, for Muggles) on the "Reserve" button beneath the book of your choice. A virtual owl, reminiscent of Hedwig, will swiftly carry your request to our library's caretakers. You'll receive a magical owl post in the form of a confirmation email, assuring you that your chosen books will soon be at your fingertips.
          </p>
          <p>
          No more chasing elusive titles or waiting in long queues. Our Reserve Books page offers a seamless experience, allowing you to focus on the joy of anticipation while we work behind the scenes to prepare your literary adventure.
          </p>
        </div>
      </div>
    </div>
      <Footer/>
    </div>
  );
};

export default ReserveBooks;
