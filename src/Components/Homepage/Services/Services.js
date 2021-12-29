import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router';
import './Services.css';

const Services = () => {
  const history = useHistory();
  return (
    <div className='container '>
      <div class='dropdown d-grid'>
        <button
          class='btn btn-lg fs-3 dropdown-btn text-light'
          type='button'
          id='dropdownMenuButton1'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          Services <FontAwesomeIcon className='ms-2' icon={faCaretDown} />
        </button>
        <ul
          class='dropdown-menu w-100 mt-3'
          aria-labelledby='dropdownMenuButton1'
        >
          {/* if you click on Office it will take you to Office page */}
          <li onClick={() => history.push('/office')}>
            <a class='dropdown-item fs-3 drop' href='#'>
              Office
            </a>
          </li>
          {/* if you click on Household it will take you to Household page */}
          <li onClick={() => history.push('/household')}>
            <a class='dropdown-item fs-3' href='#'>
              Household
            </a>
          </li>
          {/* if you click on Commercial it will take you to Commercial page */}
          <li onClick={() => history.push('/commercial')}>
            <a class='dropdown-item fs-3' href='#'>
              Commercial
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
