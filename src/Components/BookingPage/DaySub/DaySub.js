import React from 'react';
import { useHistory } from 'react-router';
import Footer from '../../Homepage/Footer/Footer';
import Navbar from '../../Homepage/Navbar/Navbar';

const DaySub = () => {
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
      <div className='text-center fs-2 pt-5 mt-5'>
        <div>
          <p>
            You have booked{' '}
            <span className='text-danger px-2 '> daily subscription</span>
            package.
          </p>
          <p>Payment should be done at the end of work.</p>

          {/* if you click on the Pay Now button it will take you to Confirmation page  */}
          <button
            onClick={() => history.push('/Confirmation')}
            className='btn btn-outline-danger btn-lg fs-3'
          >
            Pay Now
          </button>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default DaySub;
