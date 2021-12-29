import { faSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router';
import logo from '../../../Images/logo.png';
import './Navbar.css';

const Navbar = () => {
  const history = useHistory();
  return (
    <nav class='navbar navbar-dark navbar-expand-lg nav-Bg text-light fixed-top p-0'>
      <div class='container-fluid mx-md-5 mx-0'>
        <div className='d-flex justify-content-center align-items-center'>
          {/* if you click on image it will take you to Homepage */}
          <img
            onClick={() => history.push('/home')}
            src={logo}
            alt=''
            className=' logo'
          />
        </div>
        <button
          class='navbar-toggler text-light border-light border-2'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon text-danger'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarNav'>
          <ul class='navbar-nav ms-auto '>
            <li class='nav-item '>
              <a
                class='nav-link active text-light fs-4'
                aria-current='page'
                href='#'
              >
                About Us
              </a>
            </li>
            <li class='nav-item '>
              <span
                class='nav-link active text-light fs-4'
                aria-current='page'
                href='#'
              >
                <FontAwesomeIcon className='fa-rotate-90' icon={faSlash} />
              </span>
            </li>
            <li class='nav-item'>
              <a class='nav-link text-light fs-4' href='#'>
                Customer Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
