import React from 'react';
import './Navbar.css';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'
import { NavLink } from 'react-router-dom';

const Navbar = () => 
{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

    return (
    <nav class="e-navbar container relative">
        <section class="d-flex justify-content-between align-items-center py-3">

            <div class="e-logo">
                <a>
                    <div><Link to="/" className="e-logo-name">Tourism</Link></div>
                </a>
            </div>

            <ul class="e-right-items-icons">
              <li class="e-right-icons e-ml"><NavLink to="/" className="icon-style">Home</NavLink></li>
              
              

              {user ? ( <>
                  <li class="e-right-icons e-ml"><NavLink to="/forum" className="icon-style">Forum</NavLink></li>
                  <li class="e-right-icons e-ml dropdown">
                  <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Se déconnecter
            </button>
              </li>
              </>
           ) : (
          <>
          <li class="e-right-icons e-ml"><NavLink to="/login" className="icon-style">Login</NavLink></li>
          <li class="e-right-icons e-ml"><NavLink to="/register" className="icon-style">Register</NavLink></li>
             </>
           )}
            </ul>

        </section>
    </nav>
) }

export default Navbar;
