import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
import { useNavigate } from 'react-router-dom'



function Topbar() {
const user=useSelector(selectUser)
const navigate = useNavigate()
    return (
        <>
            <div className='topbar'>
                <h1 className='user username-color'>{user ? user.username : 'Guest'}</h1>
                <button className = "ab" onClick={() => navigate('/about')}> About Us</button>
            </div>
        </>
    )
}

export default Topbar