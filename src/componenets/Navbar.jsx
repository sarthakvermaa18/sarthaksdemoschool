import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div >
      <div className='all_navbar'>
        <div className='Header_section '>
          <div >

            <div className=' Header_section_child pe-lg-5 ps-lg-3 pt-2 pb-1 '>
              <a className="navbar-brand p-0 pe-5 mt-1 text-danger" >
                <img width={'193px'} style={{ backgroundColor: 'black' }} className='ps-4 pe-4 pt-2 pb-2 rounded' src="school-logo.png" alt="Logo" />
              </a>
              <div className='Address_'>
                <form className="d-flex  ms-5 pt-2 pb-0 gap-5" role="search">
                  <div>
                    <a href="tel:+916267597112" className="text-reset text-decoration-none mt-3">
                      <h5><i className="bi bi-telephone-fill"></i> Call</h5>
                      +91-6267597112
                    </a>
                  </div>
                  <div>
                    <a className="text-reset text-decoration-none mb-5 mt-4">
                      <h5><i className="bi bi-clock-fill"></i> Work Time</h5>
                      Sun - Sat: 08.00am - 03.00pm
                    </a>
                  </div>

                  <div>
                    <a className="text-reset text-decoration-none mb-5">
                      <h5><i className="bi bi-geo-alt-fill"></i> Address</h5>
                      VijayNagar 51 sec-92 , Indore
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='navbar_section'>
          <nav className="navbar  navbar_section-child navbar-expand-lg">

            <div className="container-fluid ">
              <div className='img_nav_logo'>
                <img width={'193px'} style={{ backgroundColor: 'black' }} className='ps-4 pe-4 pt-2 pb-2 rounded' src="school-logo.png" alt="Logo" />
              </div>
              <div
                className="navbar-toggler "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span ><i className="bi bi-list text-warning"></i><span className='ps-2 text-white' style={{ fontWeight: '600' }}></span></span>
              </div>
              <div className="collapse navbar-collapse navbar_droptown_bg " id="navbarSupportedContent" style={{ zIndex: '4' }}>
                <ul className="navbar-nav align-content-center UL_nav ">

                  <div className="dropdown HOme">
                    <NavLink to='/' className="dropbtn  " style={{ fontWeight: 600 }}>
                      Home
                    </NavLink>

                  </div>
                  <div className="dropdown">
                    <NavLink to='/about-us' className="dropbtn" style={{ fontWeight: 600 }}>
                      About US
                    </NavLink>
                    <div className="dropdown-content">
                      <NavLink to='/about-us'>AboutUs</NavLink>
                      <NavLink to='/principals-massage'>Principal's Message</NavLink>
                    </div>
                  </div>
                  <div className="dropdown">
                    <NavLink className="dropbtn " style={{ fontWeight: 600 }}>
                      Campus
                    </NavLink>
                    <div className="dropdown-content ">
                      <NavLink to='/infastructe'>Infrastructure</NavLink>
                      <NavLink to='/facility'>Facilities</NavLink>
                      <NavLink to='/sport'>Sports</NavLink>
                    </div>
                  </div>

                  <div className="dropdown">
                    <NavLink className="dropbtn" style={{ fontWeight: 600 }}>
                      Teaching Staff
                    </NavLink>
                    <div className="dropdown-content">
                      <NavLink to='/high-training-staff'>High School Teaching Staff</NavLink>
                      <NavLink to='/middle-school-training'>Middle School Teaching Staff</NavLink>
                      <NavLink to='/primary-school-teaching'>Primary School Teaching Staff</NavLink>
                    </div>
                  </div>
                  <div className="dropdown">
                    <NavLink className="dropbtn " style={{ fontWeight: 600 }}>
                      Events
                    </NavLink>
                    <div className="dropdown-content">
                      <NavLink to='/events'>All Events</NavLink>

                    </div>
                  </div>
                  <div className="dropdown">
                    <NavLink className="dropbtn" style={{ fontWeight: 600 }}>
                      Fees
                    </NavLink>
                    <div className="dropdown-content">
                      <NavLink to='/fees-instructions'>Fees Instructions</NavLink>
                      <NavLink to='/online-fees-payment'>Online Fees Payment</NavLink>

                    </div>
                  </div>
                  <div className="dropdown">
                    <NavLink to='/contacts' className="dropbtn " style={{ fontWeight: 600 }}>
                      Contacts
                    </NavLink>

                  </div>

                </ul>
                <div className="Nav-social-icons">
                  <i className="bi bi-instagram p-2 bg-danger rounded-bottom-circle me-4  text-white"></i>
                  <i className="bi bi-facebook p-2 bg-danger  rounded-bottom-circle me-4  text-white"></i>
                  <i className="bi bi-youtube p-2 bg-danger rounded-bottom-circle me-5  text-white"></i>
                </div>
              </div>

            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


