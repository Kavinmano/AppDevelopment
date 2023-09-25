import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser, login } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

function Topbar() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  // When the component mounts, check if the username exists in local storage
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      // Dispatch the 'login' action to store the username in Redux
      login(storedUsername);
    }
  }, []);

  return (
    <>
      <header className="top-bar"></header>
      <div className='topbar'>
        <h1 className='user username-color'>{user ? user.username : 'Guest'}</h1>
        <button className="about-button" onClick={() => navigate('/about')}>About Us</button>
        <button className="about-button" onClick={() => navigate('/terms')}>Terms and Conditions</button>
        <button className="about-button" onClick={() => navigate('/faq')}>FAQ</button>
      </div>
    </>
  );
}

export default Topbar;
