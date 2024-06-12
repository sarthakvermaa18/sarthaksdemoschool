import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import Join_us from './Join_us';

const Ourclasses = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, []);
    return (
        <div className="All_data_center">
            <div className='bg-white'>
                <Navbar />

                <div className='position-relative head-frist-section'>
                    <img className='z-1 w-100 pt-5 pb-5 OurClasses-home-img' src="pager-bg.png" alt="bg-img" />
                    <div className=' text-warning position-absolute OurClasses-home-bg-text'>School</div>
                    <div className='overlay z-4 ' style={{ backgroundColor: "#0f74ed", height: '100%', position: 'absolute', top: '0%', left: '0%', width: '100%', opacity: '15%' }}>

                    </div>
                    <div className='position-absolute opacity-100 text-center OurClasses-home-title-text' style={{ fontWeight: "600" }}>
                        <h1 >Classes</h1>
                        <div>
                            <NavLink to='/' className='text-decoration-none'> Home </NavLink> | <span>Classes</span>
                        </div>
                    </div>
                </div >

                <div className='bg-white' style={{ paddingTop: '4rem' }}>
                    <div className="m-auto " style={{ backgroundImage: `url("classes-banner.jpg")`, height: '400px ', width: '90%' }}>
                        <div className='Ourclasses-second-img-text' style={{}}>
                            <span className='text-danger pb-4' style={{ fontWeight: '600' }}>TRY NOW</span>
                            <h2 className='pb-3 pt-4' style={{ fontSize: '3rem' }}>Start Investing in You</h2>
                            <a href="/" title="" style={{ backgroundColor: '#135e9e' }} className=" rounded-4 ps-1 pe-4 pt-2 pb-2 text-decoration-none"><i className="fa fa-long-arrow-alt-right bg-white rounded-circle p-1"></i> <span className='text-white ps-3 pe-3'>Classes </span></a>

                        </div>
                    </div>
                </div>
                <div className='bg-white'>
                    <div className="classes-section ">

                        <div className="Ourclasses-cards mt-0">
                            <div className="row" style={{ paddingTop: "5rem" }}>
                                <div className="col-lg-3 col-md-6 col-sm-6  pb-4">
                                    <div className="">
                                        <div className="class-thumb position-relative">
                                            <img style={{ borderRadius: "1rem 1rem 0 0", height: '13rem' }} src="./Classes-pic/class1.jpg" alt="" className="w-100" />
                                            <div className='position-absolute rounded-circle ps-2 pe-2 pt-1 pb-1 fs-4 text-white' style={{ backgroundColor: '#f89b32', bottom: '-11% ', right: "4%" }}><i className="bi bi-cart3"></i></div>

                                            <div className='border-secondary border ' style={{ backgroundColor: '#135e9e', fontWeight: '900', height: '0.4rem' }}></div>
                                        </div>
                                        <div className="shadow border-top-0 pb-4 ps-2 pt-4 pe-2 " style={{ borderRadius: "0 0 1rem 1rem", }}>
                                            <h5 style={{ fontWeight: '600' }}>Basic English Speaking and Grammar</h5>
                                            <div className='text-secondary fs-6'><span >Mon-Fri</span> <span>10 AM - 12 AM</span></div>
                                            <div className="d-flex flex-wrap align-items-center">
                                                <div className="fs-6 text-secondary"><img src="assets/img/ico.png" alt="" />
                                                    <span>Amanda Kern</span></div><strong className="price ps-2 ps-4">$45</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 pb-4">
                                    <div className="">
                                        <div className="class-thumb position-relative">
                                            <img style={{ borderRadius: "1rem 1rem 0 0", height: '13rem' }} src="./Classes-pic/class2.jpg" alt="" className="w-100" />
                                            <div className='position-absolute rounded-circle ps-2 pe-2 pt-1 pb-1 fs-4 text-white' style={{ backgroundColor: '#f89b32', bottom: '-11% ', right: "4%" }}><i className="bi bi-cart3"></i></div>

                                            <div className='border-secondary border ' style={{ backgroundColor: '#135e9e', fontWeight: '900', height: '0.4rem' }}></div>
                                        </div>
                                        <div className="shadow border-top-0 pb-4 ps-2 pt-4 pe-2" style={{ borderRadius: "0 0 1rem 1rem", }}>
                                            <h5 style={{ fontWeight: '600' }}>Natural Sciences & Mathematics Courses</h5>
                                            <div className='text-secondary fs-6'><span >Mon-Fri</span> <span>10 AM - 12 AM</span></div>
                                            <div className="d-flex flex-wrap align-items-center">
                                                <div className="fs-6 text-secondary"><img src="assets/img/ico.png" alt="" />
                                                    <span>Gypsy Hardinge</span></div><strong className="price ps-4">$55</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 pb-4">
                                    <div className="">
                                        <div className="class-thumb position-relative">
                                            <img style={{ borderRadius: "1rem 1rem 0 0", height: '13rem' }} src="./Classes-pic/class3.jpg" alt="" className="w-100" />
                                            <div className='position-absolute rounded-circle ps-2 pe-2 pt-1 pb-1 fs-4 text-white' style={{ backgroundColor: '#f89b32', bottom: '-11% ', right: "4%" }}><i className="bi bi-cart3"></i></div>

                                            <div className='border-secondary border ' style={{ backgroundColor: '#135e9e', fontWeight: '900', height: '0.4rem' }}></div>
                                        </div>
                                        <div className="shadow border-top-0 pb-4 ps-2 pt-4 pe-2" style={{ borderRadius: "0 0 1rem 1rem", }}>
                                            <h5 style={{ fontWeight: '600' }}>Environmental Studies & Earth Sciences</h5>
                                            <div className='text-secondary fs-6'><span >Mon-Fri</span> <span>10 AM - 12 AM</span></div>
                                            <div className="d-flex flex-wrap align-items-center">
                                                <div className="fs-6 text-secondary"><img src="assets/img/ico.png" alt="" />
                                                    <span>Margje Jutten</span></div><strong className="price ps-4">$67</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 pb-4">
                                    <div className="">
                                        <div className="class-thumb position-relative">
                                            <img style={{ borderRadius: "1rem 1rem 0 0", height: '13rem' }} src="./Classes-pic/class4.jpg" alt="" className="w-100" />
                                            <div className='position-absolute rounded-circle ps-2 pe-2 pt-1 pb-1 fs-4 text-white' style={{ backgroundColor: '#f89b32', bottom: '-11% ', right: "4%" }}><i className="bi bi-cart3"></i></div>

                                            <div className='border-secondary border ' style={{ backgroundColor: '#135e9e', fontWeight: '900', height: '0.4rem' }}></div>
                                        </div>
                                        <div className="shadow border-top-0 pb-4 ps-2 pt-4 pe-2" style={{ borderRadius: "0 0 1rem 1rem", }}>
                                            <h5 style={{ fontWeight: '600' }}>Hospitality, Leisure & Sports Courses</h5>
                                            <div className='text-secondary fs-6'><span >Mon-Fri</span> <span>10 AM - 12 AM</span></div>
                                            <div className="d-flex flex-wrap align-items-center">
                                                <div className="fs-6 text-secondary"><img src="assets/img/ico.png" alt="" />
                                                    <span>Hubert Franck</span></div><strong className="price ps-4">$47</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6  pb-4">
                                    <div className="">
                                        <div className="class-thumb position-relative">
                                            <img style={{ borderRadius: "1rem 1rem 0 0", height: '13rem' }} src="./Classes-pic/class5.jpg" alt="" className="w-100" />
                                            <div className='position-absolute rounded-circle ps-2 pe-2 pt-1 pb-1 fs-4 text-white' style={{ backgroundColor: '#f89b32', bottom: '-11% ', right: "4%" }}><i className="bi bi-cart3"></i></div>

                                            <div className='border-secondary border ' style={{ backgroundColor: '#135e9e', fontWeight: '900', height: '0.4rem' }}></div>
                                        </div>
                                        <div className="shadow border-top-0 pb-4 ps-2 pt-4 pe-2 " style={{ borderRadius: "0 0 1rem 1rem", }}>
                                            <h5 style={{ fontWeight: '600' }}>Basic English Speaking and Grammar</h5>
                                            <div className='text-secondary fs-6'><span >Mon-Fri</span> <span>10 AM - 12 AM</span></div>
                                            <div className="d-flex flex-wrap align-items-center">
                                                <div className="fs-6 text-secondary"><img src="assets/img/ico.png" alt="" />
                                                    <span>Amanda Kern</span></div><strong className="price ps-2 ps-4">$45</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 pb-4">
                                    <div className="">
                                        <div className="class-thumb position-relative">
                                            <img style={{ borderRadius: "1rem 1rem 0 0", height: '13rem' }} src="./Classes-pic/class6.jpg" alt="" className="w-100" />
                                            <div className='position-absolute rounded-circle ps-2 pe-2 pt-1 pb-1 fs-4 text-white' style={{ backgroundColor: '#f89b32', bottom: '-11% ', right: "4%" }}><i className="bi bi-cart3"></i></div>

                                            <div className='border-secondary border ' style={{ backgroundColor: '#135e9e', fontWeight: '900', height: '0.4rem' }}></div>
                                        </div>
                                        <div className="shadow border-top-0 pb-4 ps-2 pt-4 pe-2" style={{ borderRadius: "0 0 1rem 1rem", }}>
                                            <h5 style={{ fontWeight: '600' }}>Natural Sciences & Mathematics Courses</h5>
                                            <div className='text-secondary fs-6'><span >Mon-Fri</span> <span>10 AM - 12 AM</span></div>
                                            <div className="d-flex flex-wrap align-items-center">
                                                <div className="fs-6 text-secondary"><img src="assets/img/ico.png" alt="" />
                                                    <span>Gypsy Hardinge</span></div><strong className="price ps-4">$55</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 pb-4">
                                    <div className="">
                                        <div className="class-thumb position-relative">
                                            <img style={{ borderRadius: "1rem 1rem 0 0", height: '13rem' }} src="./Classes-pic/class7.jpg" alt="" className="w-100" />
                                            <div className='position-absolute rounded-circle ps-2 pe-2 pt-1 pb-1 fs-4 text-white' style={{ backgroundColor: '#f89b32', bottom: '-11% ', right: "4%" }}><i className="bi bi-cart3"></i></div>

                                            <div className='border-secondary border ' style={{ backgroundColor: '#135e9e', fontWeight: '900', height: '0.4rem' }}></div>
                                        </div>
                                        <div className="shadow border-top-0 pb-4 ps-2 pt-4 pe-2" style={{ borderRadius: "0 0 1rem 1rem", }}>
                                            <h5 style={{ fontWeight: '600' }}>Environmental Studies & Earth Sciences</h5>
                                            <div className='text-secondary fs-6'><span >Mon-Fri</span> <span>10 AM - 12 AM</span></div>
                                            <div className="d-flex flex-wrap align-items-center">
                                                <div className="fs-6 text-secondary"><img src="assets/img/ico.png" alt="" />
                                                    <span>Margje Jutten</span></div><strong className="price ps-4">$67</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 pb-4">
                                    <div className="">
                                        <div className="class-thumb position-relative">
                                            <img style={{ borderRadius: "1rem 1rem 0 0", height: '13rem' }} src="./Classes-pic/class8.jpg" alt="" className="w-100" />

                                            <div className='position-absolute rounded-circle ps-2 pe-2 pt-1 pb-1 fs-4 text-white' style={{ backgroundColor: '#f89b32', bottom: '-11% ', right: "4%" }}><i className="bi bi-cart3"></i></div>
                                            <div className='border-secondary border ' style={{ backgroundColor: '#135e9e', fontWeight: '900', height: '0.4rem' }}></div>
                                        </div>

                                        <div className="shadow border-top-0 pb-4 ps-2 pt-4 pe-2" style={{ borderRadius: "0 0 1rem 1rem", }}>
                                            <h5 style={{ fontWeight: '600' }}>Hospitality, Leisure & Sports Courses</h5>
                                            <div className='text-secondary fs-6'><span >Mon-Fri</span> <span>10 AM - 12 AM</span></div>
                                            <div className="d-flex flex-wrap align-items-center">
                                                <div className="fs-6 text-secondary"><img src="assets/img/ico.png" alt="" />
                                                    <span>Hubert Franck</span></div><strong className="price ps-4">$47</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white m-0 pe-5 me-2'>
                    <ul className="pagination d-flex justify-content-end  m-0">
                        <li className="page-item">
                            <a className="page-link" href="/">1</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link active" href="/">2</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="/">3</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="/">4</a>
                        </li><li className="page-item">
                            <a className="page-link" href="/">...</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="/">15</a>
                        </li>
                    </ul>
                </div>
                <div className=' bg-white' style={{ paddingTop: '14rem' }}>
                    <Join_us />
                </div>
            </div>
        </div>
    )
}

export default Ourclasses;