import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderNav = () => {
  return (
    <div className='Header_section '>
      <div className=' bg-light'>

        <div className=' d-flex justify-content-around pe-lg-5 ps-lg-3 pt-2 pb-1 bg-light'>
          <a className="navbar-brand p-0 pe-5 mt-1 text-danger" href="/">
            <img width={'193px'} style={{ backgroundColor: 'black' }} className='ps-4 pe-4 pt-2 pb-2 rounded' src="school-logo.png" alt="Logo" />
          </a>
          <form className="d-flex gap-5 ms-5 pt-2 pb-0" role="search">
            <p>
              <a href="/" className="text-reset text-decoration-none mt-3">
                <h5><i className="bi bi-telephone-fill"></i> Call</h5>
                +91-9568091267
              </a>
            </p>
            <p>
              <a href="/" className="text-reset text-decoration-none mb-5 mt-4">
                <h5><i className="bi bi-clock-fill"></i> Work Time</h5>
                Sun - Sat: 08.00am - 03.00pm
              </a>
            </p>

            <p>
              <a href="/" className="text-reset text-decoration-none mb-5">
                <h5><i className="bi bi-geo-alt-fill"></i> Address</h5>
                VijayNagar 51 sec-92 , Indore
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
