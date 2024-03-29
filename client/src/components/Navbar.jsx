import React from 'react'
import "./Navbar.css";
import { NavLink } from 'react-router-dom'
import { useAuth } from '../store/auth';

export const Navbar = () => {
  const {isLoggedIn}=useAuth();
  return (
    <>
    <header>
        <div className="container">
        <div className="logo-brand">
            <NavLink to="/">My website</NavLink>
          </div>
          <nav>
          <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                <li><NavLink to='/service'>Service</NavLink></li>
                {isLoggedIn?<li><NavLink to='/logout'>Logout</NavLink></li>:
                <>
                <li><NavLink to='/login'>Login</NavLink></li>
                <li><NavLink to='/register'>Register</NavLink></li>
                </> }
            </ul>
          </nav>
        </div>
    </header>
    </>
  )
}
