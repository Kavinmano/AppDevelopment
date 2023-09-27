import React, { useState } from 'react';
import Footer from '../components/Footer';
import bg from '../assets/css/Sign.jpg';

const Settings = () => {
  // Example user settings
  const [username, setUsername] = useState('Kavin_Tes');
  const [email, setEmail] = useState('kavin123@gmail.com');
  const [notificationEnabled, setNotificationEnabled] = useState(true);

  // Function to update user settings
  const updateSettings = () => {
    // Implement the logic to update user settings (e.g., make an API request to the backend)
    console.log('User settings updated');
  };

  return (
    <div className='wrapper d-flex flex-column'style={{ minHeight: '100vh' }}>
    <div className='auth-container' style={{backgroundImage: `url(${bg})`,backgroundPosition: "center", backgroundSize: "cover"}}>

    <div className="container mt-5">
      <h1>Settings</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="notificationEnabled"
            checked={notificationEnabled}
            onChange={() => setNotificationEnabled(!notificationEnabled)}
          />
          <label className="form-check-label" htmlFor="notificationEnabled">Enable Notifications</label>
        </div>
        <button type="button" className="btn btn-primary" onClick={updateSettings}>
          Save Settings
        </button>
      </form>
    </div>
    </div>
      <Footer/>
    </div>
  );
};

export default Settings;
