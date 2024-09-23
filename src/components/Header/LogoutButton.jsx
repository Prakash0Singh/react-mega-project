import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutButton() {
    const dispatch=useDispatch();

    const logoutHandler=()=>{
        authService.logout()
        .then(()=>{
            dispatch(logout())
        })
        .catch((error)=>{
            console.error(error);
        })
    }
  return (
    <button className='d-inline-block custom-px-6 py-2 rounded-pill custom-hover-bg-blue' onClick={logoutHandler} >
        Logout
    </button>
  )
}

export default LogoutButton