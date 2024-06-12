import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import JoinUs from './Join_us';
const Schoolteachers = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, []);
    return (
        <div className="All_data_center">
            <div>
                <Navbar />
                <div className='position-relative head-frist-section'>
                    <img className='z-1 w-100 pt-5 pb-5 OurClasses-home-img' src="pager-bg.png" alt="bg-img" />
                    <div className=' text-warning position-absolute OurClasses-home-bg-text'>School</div>
                    <div className='overlay z-4 ' style={{ backgroundColor: "#0f74ed", height: '100%', position: 'absolute', top: '0%', left: '0%', width: '100%', opacity: '15%' }}>

                    </div>
                    <div className='position-absolute opacity-100 text-center OurClasses-home-title-text' style={{ fontWeight: "600" }}>
                        <h1 >Teachers</h1>
                        <div>
                            <NavLink to='/' className='text-decoration-none'> Home </NavLink> | <span> Teachers </span>
                        </div>
                    </div>
                </div >
                <div className='bg-white'>
                    <div >

                        <div className="mt-0 ">
                            <div className="teachers-section" >
                                <div className="col-lg-3 col-md-6 col-sm-6 pb-4 teachers-section-child ">
                                    <div >
                                        <div className="class-thumb position-relative">
                                            <img style={{ borderRadius: "1rem 1rem 0 0", }} src="./Classes-pic/teacher1.jpg" alt="" className="w-100" />
                                            <div className='position-absolute rounded-circle ps-2 pe-2 pt-1 pb-1 fs-4 text-white' style={{ backgroundColor: '#f89b32', bottom: '-4% ', right: "4%" }}><i className="bi bi-plus"></i></div>

                                            <div className='border-secondary border ' style={{ backgroundColor: '#135e9e', fontWeight: '900', height: '0.4rem' }}></div>
                                        </div>
                                        <div className="shadow border-top-0 pb-4 ps-4 pt-4 pe-2 " style={{ borderRadius: "0 0 1rem 1rem", }}>
                                            <h5 style={{ fontWeight: '600' }}>Sarthak Varma</h5>
                                            <div className='text-secondary fs-6'>Instructor</div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 pb-4 teachers-section-child" >
                                    <div >
                                        <div className="class-thumb position-relative">
                                            <img style={{ borderRadius: "1rem 1rem 0 0" }} src="./Classes-pic/teacher2.jpg" alt="" className="w-100" />
                                            <div className='position-absolute rounded-circle ps-2 pe-2 pt-1 pb-1 fs-4 text-white' style={{ backgroundColor: '#f89b32', bottom: '-4% ', right: "4%" }}><i className="bi bi-plus"></i></div>

                                            <div className='border-secondary border ' style={{ backgroundColor: '#135e9e', fontWeight: '900', height: '0.4rem' }}></div>
                                        </div>
                                        <div className=" shadow border-top-0 pb-4 ps-4 pt-4 pe-2" style={{ borderRadius: "0 0 1rem 1rem", }}>
                                            <h5 style={{ fontWeight: '600' }}>Neha Panday</h5>
                                            <div className='text-secondary fs-6'>English Teacher</div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 pb-4 teachers-section-child" >
                                    <div >
                                        <div className="class-thumb position-relative">
                                            <img style={{ borderRadius: "1rem 1rem 0 0" }} src="./Classes-pic/teacher3.jpg" alt="" className="w-100" />
                                            <div className='position-absolute rounded-circle ps-2 pe-2 pt-1 pb-1 fs-4 text-white' style={{ backgroundColor: '#f89b32', bottom: '-4% ', right: "4%" }}><i className="bi bi-plus"></i></div>

                                            <div className='border-secondary border ' style={{ backgroundColor: '#135e9e', fontWeight: '900', height: '0.4rem' }}></div>
                                        </div>
                                        <div className=" shadow border-top-0 pb-4 ps-4 pt-4 pe-2" style={{ borderRadius: "0 0 1rem 1rem", }}>
                                            <h5 style={{ fontWeight: '600' }}>Naman Thakur</h5>
                                            <div className='text-secondary fs-6'>Art Teacher</div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 pb-4 teachers-section-child">
                                    <div >
                                        <div className="class-thumb position-relative">
                                            <img style={{ borderRadius: "1rem 1rem 0 0", }} src="./Classes-pic/teacher4.jpg" alt="" className="w-100" />
                                            <div className='position-absolute rounded-circle ps-2 pe-2 pt-1 pb-1 fs-4 text-white' style={{ backgroundColor: '#f89b32', bottom: '-4% ', right: "4%" }}><i className="bi bi-plus"></i></div>

                                            <div className='border-secondary border ' style={{ backgroundColor: '#135e9e', fontWeight: '900', height: '0.4rem' }}></div>
                                        </div>
                                        <div className=" shadow border-top-0 pb-4 ps-4 pt-4 pe-2" style={{ borderRadius: "0 0 1rem 1rem", }}>
                                            <h5 style={{ fontWeight: '600' }}>Ruchika singh</h5>
                                            <div className='text-secondary fs-6'>Math Teacher</div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-white m-0 pe-4 me-2'>
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
                    <JoinUs />
                </div>
            </div>
        </div>
    )
}

export default Schoolteachers