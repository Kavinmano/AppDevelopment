import React, { useState } from 'react';
import Footer from '../components/Footer';
import bg from '../assets/css/pic10.jpg';

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedBook, setSelectedBook] = useState('');
  const [selectedUser, setSelectedUser] = useState('');

  // Function to handle book checkout
  const handleCheckout = () => {
    // Implement the logic to handle book checkout here
    // This could include updating the database and state
    console.log(`Book "${selectedBook}" checked out by user "${selectedUser}"`);
  };

  return (
    <div className='wrapper d-flex flex-column'style={{ minHeight: '100vh' }}>
    <div className='auth-container' style={{backgroundImage: `url(${bg})`,backgroundPosition: "center", backgroundSize: "cover"}}>

    <div className="container mt-5">
      <h1 className="mb-4">Hogwarts Library Management System Dashboard</h1>

      {/* Book Checkout Section */}
      <div className="mb-4">
        <h2>Book Checkout</h2>
        <div className="row g-3">
          <div className="col-md-6">
            <select
              className="form-select"
              value={selectedBook}
              onChange={(e) => setSelectedBook(e.target.value)}
            >
              <option value="">Select a Book</option>
              {books.map((book) => (
                <option key={book.id} value={book.title}>
                  {book.title}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-6">
            <select
              className="form-select"
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
            >
              <option value="">Select a User</option>
              {users.map((user) => (
                <option key={user.id} value={user.name}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button className="btn btn-primary mt-3" onClick={handleCheckout}>
          Checkout
        </button>
      </div>

      {/* Book and User Lists */}
      <div className="mb-4">
        <h2>Books</h2>
        <ul className="list-group">
          {books.map((book) => (
            <li key={book.id} className="list-group-item">
              {book.title}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Users</h2>
        <ul className="list-group">
          {users.map((user) => (
            <li key={user.id} className="list-group-item">
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
      <Footer/>
    </div>
  );
};

export default Dashboard;
