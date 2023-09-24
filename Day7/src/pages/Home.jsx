import React from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
function Home() {
  return (
    <>
      <Layout />
      <div className='wrapper'>
      <div className='wrapper'style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }} >
      <div className="container mt-5" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}  >
        <div className="welcome-container text-center " >
          <h1 className="display-4">Welcome to the Library Management System</h1>
          <p className="lead">Explore and manage your library resources with ease.</p>
        </div>

        <div className="row mt-5">
          <div className="col-md-6">
            <div className="featured-books">
              <h2>Featured Books</h2>
              <ul className="list-group">
                {/* Display a list of featured books here */}
                <li className="list-group-item">Book 1</li>
                <li className="list-group-item">Book 2</li>
                <li className="list-group-item">Book 3</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <div className="upcoming-events">
              <h2>Upcoming Events</h2>
              <ul className="list-group">
                {/* Display a list of upcoming events or announcements here */}
                <li className="list-group-item">Event 1</li>
                <li className="list-group-item">Event 2</li>
                <li className="list-group-item">Event 3</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div>
         </div>
         </div>
         <Footer/>
      </div>
    </>
  );
}

export default Home;
