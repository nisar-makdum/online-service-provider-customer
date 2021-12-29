import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Footer from '../../Homepage/Footer/Footer';
import Navbar from '../../Homepage/Navbar/Navbar';

const Household = () => {
  const [janitorNum, setJanitorNum] = useState(1);
  const history = useHistory();
  return (
    <section style={{ height: '100vh' }} className='bg-watermark'>
      <Navbar />
      <div className='fs-1 mt-5 pt-5 container-fluid px-5'>
        <div className='pt-4 px-4'>
          {' '}
          <span>NO</span> <br /> <span>MORE</span> <br /> <span>EXCUSES</span>
        </div>
      </div>

      <div className='container-fluid '>
        <div class='  d-grid'>
          <button
            class='btn btn-lg fs-3 dropdown-btn text-light w-25 mx-5'
            type='button'
          >
            Services <FontAwesomeIcon className='ms-2' icon={faCaretDown} />
          </button>
          <div class='bg-light w-25 mx-5 mt-2'>
            <div>
              <div class='p-2 fs-3' href='#'>
                Household
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=' pt-2 container-fluid ms-5 ps-4 col-6'>
        <p className='fs-1'>Explain Your Work</p>
        <div class='form-floating mb-2 w-50'>
          <textarea
            class='form-control border-2 rounded-3 bg-light'
            placeholder='Leave a comment here'
            id='floatingTextarea2'
            style={{ height: '100px' }}
          ></textarea>
          <label for='floatingTextarea2'>Write Here</label>
        </div>
        <div class='btn-group'>
          <button class='btn dropdown-btn btn-lg text-light fs-3' type='button'>
            Janitor Need
          </button>
          <button
            type='button'
            class='btn btn-lg text-light dropdown-toggle dropdown-toggle-split fs-5 dropdown-btn'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            <span className='px-5'>{janitorNum}</span>
          </button>
          <ul style={{ width: '10px' }} class='dropdown-menu '>
            {' '}
            {janitorNum === 1 ? (
              ''
            ) : (
              /* if you click on the numbers it will take you to schedule page */
              <li
                value={1}
                class='dropdown-item fs-5 drop'
                onClick={(e) => {
                  setJanitorNum(e.target.value);
                  history.push('/schedule');
                }}
              >
                1
              </li>
            )}
            {janitorNum === 2 ? (
              ''
            ) : (
              <li
                value={2}
                class='dropdown-item fs-5 drop'
                onClick={(e) => {
                  setJanitorNum(e.target.value);
                  history.push('/schedule');
                }}
              >
                2
              </li>
            )}
            {janitorNum === 3 ? (
              ''
            ) : (
              <li
                value={3}
                class='dropdown-item fs-5 drop'
                onClick={(e) => {
                  setJanitorNum(e.target.value);
                  history.push('/schedule');
                }}
              >
                3
              </li>
            )}
            {janitorNum === 4 ? (
              ''
            ) : (
              <li
                value={4}
                class='dropdown-item fs-5 drop'
                onClick={(e) => {
                  setJanitorNum(e.target.value);
                  history.push('/schedule');
                }}
              >
                4
              </li>
            )}
            {janitorNum === 5 ? (
              ''
            ) : (
              <li
                value={5}
                class='dropdown-item fs-5 drop'
                onClick={(e) => {
                  setJanitorNum(e.target.value);
                  history.push('/schedule');
                }}
              >
                5
              </li>
            )}
          </ul>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Household;
