import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Footer extends Component {
  render() {
    const shapeStyle = {
      visibility: "visible",
      animationDuration: "1s",
      animationDelay: "0.3s",
      animationName: "fadeInLeft",
    };

    return (
      <div className="all_home_componenets">
        <div className="footer pt-5 bg-white ">
          <div
            className="footer-top-wrap  mt-0"
            style={{
              paddingTop: "44px", backgroundColor: '#263238'
            }}
          >

            <div className="container">
              <div className="footer-widgets-wrap">
                <div className="Footer-child">
                  <div className="all-footer1">
                    <div className="footer-widget">
                      <div className="footer-about">
                        <div className="footer-logo logo">
                          <img
                            src="school-logo.png"
                            alt=""
                            width={"280px"}
                          />
                        </div>
                        <div className="footer-text mt-4 w-75">
                          <p style={{ fontWeight: "700" }}>
                            Vivamus porta efficitur nibh nec convallis. Vestibulum egestas eleifend justo. Ut tellus ipsum, accumsan
                          </p>
                        </div>
                        <div className="footer-social-icons">
                          <i className="bi bi-instagram ps-2 pe-2  me-3  text-white"></i>
                          <i className="bi bi-facebook ps-2 pe-2  me-3  text-white"></i>
                          <i className="bi bi-twitter ps-2 pe-2  me-3  text-white" ></i>
                          <i className="bi bi-linkedin ps-2 pe-2  me-3  text-white"></i>
                          <i className="bi bi-youtube ps-2 pe-2  me-5  text-white"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="all-footer2">
                    <div >
                      <div className="footer-widget">
                        <h3
                          className="fw-title pb-4 "
                          style={{ fontWeight: "600" }}
                        >
                          Quicks Links
                        </h3>
                        <ul
                          className="list-wrap"
                          style={{ marginLeft: "-33px", fontWeight: "600" }}
                        >
                          <p>
                            <NavLink
                              to="/about-us"
                              className="text-reset text-decoration-none"
                            >
                              About Us
                            </NavLink>
                          </p>
                          <p>
                            <NavLink
                              to="/ourclasses"
                              className="text-reset text-decoration-none"
                            >
                              Our Classes
                            </NavLink>
                          </p>
                          <p>
                            <NavLink
                              to="/schoolteachers"
                              className="text-reset text-decoration-none"
                            >
                              School Teachers
                            </NavLink>
                          </p>
                          <p>
                            <NavLink
                              to="/events"
                              className="text-reset text-decoration-none"
                            >
                              Recent Events
                            </NavLink>
                          </p>

                          <p>
                            <NavLink
                              to="/contacts"
                              className="text-reset text-decoration-none"
                            >
                              Contacts
                            </NavLink>
                          </p>
                        </ul>
                      </div>
                    </div>
                    <div >
                      <div className="footer-widget">
                        <ul
                          className="list-wrap pt-4"
                          style={{ marginLeft: "-33px", fontWeight: "600" }}
                        >
                          <div >
                            <a className="text-reset text-decoration-none mb-5">
                              <h5><i className="bi bi-geo-alt-fill"></i> Address</h5>
                              GLs VijayNagar 51 sec-92 , Indore , Mp
                            </a>
                          </div>
                          <div className="pt-4 pb-4">
                            <a className="text-reset text-decoration-none mb-5 mt-4">
                              <h5><i className="bi bi-clock-fill"></i> Work Time</h5>
                              Sun - Sat: 08.00am - 03.00pm
                            </a>
                          </div>
                          <div className="pb-2">
                            <a className="text-reset text-decoration-none mt-3">
                              <h5><i className="bi bi-telephone-fill"></i> Call</h5>
                              +91-9568091267
                            </a>
                          </div>


                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div
            className="copyright-wrap p-4 text-center"
            style={{
              background: "#162842",
              color: "black",
              borderTop: "1px solid #a068f4",
              alignItems: "center",
            }}
          >
            <div className="container text-light" style={{ fontWeight: "600" }}>
              Copyright © 2024 School Name. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
