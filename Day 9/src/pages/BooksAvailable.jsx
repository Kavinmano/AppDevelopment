import React, { useState, useEffect } from 'react';

const BooksAvailable = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch data from your API or database
    fetch('/api/books') // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Available Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
          // You can display more book details here as needed
        ))}
      </ul>
    </div>
  );
};

export default BooksAvailable;
