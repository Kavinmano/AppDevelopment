import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
import { useNavigate } from 'react-router-dom'



function Topbar() {
const user=useSelector(selectUser)
const navigate = useNavigate()
    return (
        <>
        <header class="top-bar">
  
</header>

            <div className='topbar'>
                
                <h1 className='user username-color'>{user ? user.username : 'Guest'}</h1>
                <button className = "about-button" onClick={() => navigate('/about')}> About Us</button>
                <button className = "about-button" onClick={() => navigate('/terms')}> Terms and Conditions</button>
                <button className = "about-button" onClick={() => navigate('/faq')}> Faq</button>
                
            </div>
        </>
    )
}

export default Topbar