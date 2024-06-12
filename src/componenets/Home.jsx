import React from 'react'
import Slider from './Slider/Slider';
import Facilities from './Facilities';
import Features from './Features';
import ParallexComp from './ParallexComp';
import Intro from './Introduction/Intro';
import Navbar from './Navbar'
import MissionVision from './About-us-inside/MissionVision';
const Home = () => {
  return (
    <div className='all_home_componenets'>
      <div className='All-home'>
        <Navbar />
        <Slider />
        <Intro />
        <ParallexComp />
        <Features />
        <MissionVision />
        <Facilities />
        <div className='newsletter-section m-auto mt-5' style={{ background: " rgb(253,199,48)", background: "linear-gradient(90deg, rgba(253,199,48,1) 12%, rgba(249,167,50,1) 44%, rgba(243,118,52,1) 100%)" }}>
          <section >
            <div className="container">
              <div className="newsletter-sec">
                <div className="newsletter__child">
                  <div className="col-lg-4">
                    <div className="newsz-ltr-text">
                      <h2 style={{ fontWeight: "700" }} className='mb-4'>Join us <div>and stay tuned!</div></h2>
                      <div className='text-reset'>
                        <a href="contacts" title="" className="btn-default text-decoration-none pt-1 pb-1 ps-1 pe-5 bg-primary rounded-5" style={{ fontWeight: "600" }}><i className="fa fa-long-arrow-alt-right p-1  rounded-circle bg-primary-subtle "></i><span className='ps-3 text-light'>Join Us</span></a>

                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 Form_child ">
                    <form className="form-group">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            <input type="text" style={{ backgroundColor: '#fddead' }} className="form-control rounded-4" name="name" placeholder="Name" />
                          </div></div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <input type="email" style={{ backgroundColor: '#fddead' }} className="form-control rounded-4" name="email" placeholder="Email" />
                          </div></div>
                        <div className="col-md-4">
                          <div className="form-group select-tg">
                            <select style={{ backgroundColor: '#fddead' }} className="form-control rounded-4"><option>Class 1</option><option>Class 2</option><option>Class 3</option><option>Class 4</option><option>Class 5</option><option>Class 6</option></select>
                          </div></div>
                        <div className="col-md-12 mt-2">
                          <div className="form-group">
                            <textarea rows="3" style={{ backgroundColor: '#fddead' }} className="form-control rounded-4" name="message" placeholder="Message"></textarea>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div></div>
  )
}

export default Home;