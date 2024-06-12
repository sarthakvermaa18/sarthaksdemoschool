import React,{useEffect} from "react";
import Form from "./Form";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

function Contact() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, []);
  return (
    <div>
        <Navbar/>
        <div>
        <div className='position-relative head-frist-section'>
                    <img className='z-1 w-100 pt-5 pb-5 OurClasses-home-img' src="pager-bg.png" alt="bg-img" />
                    <div className=' text-warning position-absolute OurClasses-home-bg-text'>School</div>
                    <div className='overlay z-4 text-center text-dark' style={{ backgroundColor: "#0f74ed", height: '100%', position: 'absolute', top: '0%', left: '0%', width: '100%', opacity: '15%' }}>
                     
                    </div>
                    <div className='position-absolute opacity-100 text-center OurClasses-home-title-text' style={{ fontWeight: "600" }}>
                        <h2  style={{fontWeight:600,fontSize:'2rem'}}>CONTACT US</h2>
                        <div>
                            <NavLink to='/' className='text-decoration-none'> Home </NavLink> | <span> CONTACT </span>
                        </div>
                    </div>
                </div >
        </div>
      <div className="Contact-us-main-container">
        <div className="Contact-Heading">
          <span>Get In Touch With Rajiv School </span>
          <p>
            If you have any questions regarding programs, facilities or have{" "}
            <br />
            requests or suggestions to make, feel free to give us a call or fill
            out the form below. Request for a campus visit by submitting the
            form below.
          </p>
        </div>
        <div className="Contsct-us-cards">
          <div className="card-1">
            <i className="fa-solid fa-location-dot CARD-ICON "></i>
            <p className="CARD-HEADING">"OUR LOCATION"</p>
            <span className="Card-Info">
              Vijay Nagar square, behind Sharma sweets Shree Krishna colony,
              141.
            </span>
          </div>
          <div className="card-2">
            <i className="fa-solid fa-phone CARD-ICON2"></i>
            <p className="CARD-HEADING2">" CONTACT NUMBER"</p>
            <span className="Card-Info2">
              <span>073-222.......</span> <br />
              <span>+919233.......</span>
              <br />
              <span>+917937.......</span>
            </span>
          </div>
          <div className="card-3">
            <i className="fa-solid fa-envelope CARD-ICON"></i>{" "}
            <p className="CARD-HEADING">" EMAIL ADRESS"</p>
            <span className="Card-Info">
              Rajiv.school@gmail.com
              <br />
              Rajschool@gmail.com
            </span>
          </div>
        </div>
      </div>
      <div>
        <Form/>
      </div>
    </div>
  );
}

export default Contact;