import React from 'react';
import { useHistory } from 'react-router';
import Footer from '../Homepage/Footer/Footer';
import Navbar from '../Homepage/Navbar/Navbar';

const Schedule = () => {
  const history = useHistory();
  return (
    <section className='bg-watermark'>
      <Navbar />
      <div className='fs-1 mt-5 pt-5 container-fluid px-5'>
        <div className='pt-4 px-4'>
          {' '}
          <span>NO</span> <br /> <span>MORE</span> <br /> <span>EXCUSES</span>
        </div>
      </div>
      <p className='fs-3 fw-bold text-center'>
        Please Select Your Date And Time
      </p>
      <div className='mt-2 pt-3 container-fluid px-5 fs-4  d-flex justify-content-evenly'>
        <span>
          <span className='fw-bold'>From Date : </span>
          <input className='form-control' type='date' name='' id='' />
        </span>
        <span>
          <span className='fw-bold'>From Time : </span>{' '}
          <input className='form-control' type='time' name='' id='' />
        </span>
        <span>
          <span className='fw-bold'>To Time : </span>{' '}
          <input className='form-control' type='time' name='' id='' />
        </span>
      </div>

      <div class='dropdown px-5 mx-4 mt-5 '>
        <button
          class=' btn fs-3 text-light dropdown-toggle dropdown-btn'
          type='button'
          id='dropdownMenuButton1'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          Subscription
        </button>
        <ul class='dropdown-menu fs-3' aria-labelledby='dropdownMenuButton1'>
          {/* if you click on the Daily Subscription it will take you to Daily Subscription page  */}
          <li onClick={() => history.push('/daySub')}>
            <a class='dropdown-item' href='#'>
              Daily Subscription
            </a>
          </li>
          {/* if you click on the Weekly Subscription it will take you to Weekly Subscription page  */}
          <li onClick={() => history.push('/weeklySub')}>
            <a class='dropdown-item' href='#'>
              Weekly Subscription
            </a>
          </li>
          {/* if you click on the Monthly Subscription it will take you to Weekly Monthly page  */}
          <li onClick={() => history.push('/monthlySub')}>
            <a class='dropdown-item' href='#'>
              Monthly Subscription
            </a>
          </li>
        </ul>
      </div>

      <Footer />
    </section>
  );
};

export default Schedule;
