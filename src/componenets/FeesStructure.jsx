import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

const FeesStructure = () => {
    return (
        <div className="all_home_componenets">
        <div>
            <Navbar/>
            <div className="mb-5 ">
                <div className="p-5 FeesStructure-section" style={{backgroundColor:"#282726"}}>
                    <div className="ps-4">
                        <h1 style={{ fontSize: "27px" }} className="text-white font-weight-600 mb-0 text-uppercase">Fees Structure</h1>

                    </div>
                    <div className="d-flex justify-content-center  pe-4 me-5 FeesStructure-section1">
                        <div className="text-center ">
                         <div className="" style={{ color: "#fff" }}> <NavLink to='/' className='text-decoration-none' style={{ color: "#fff" }} >Home</NavLink><span style={{ padding: "0px 10px" }} > / </span>Fees Structure</div></div>
                    </div>
                </div>
            </div>
            <section className="wow animate__fadeIn" style={{ visibility: "visible", animationName: "fadeIn;" }}>
                <div className="container">
                    <div className="row">
                        <div style={{ marginBottom: "25px" }} className="col-md-12">
                            {/* <h3 className="text-danger font-weight-600 no-margin-bottom display-inline-block  text-uppercase ">Fees Structure</h3> */}
                            <div className="clearfix"></div>
                            <div className="separator-line-horrizontal-medium-light2 greennew display-inline-block margin-10px-top xs-margin-20px-top  margin-10px-bottom sm-margin-25px-bottom"></div>
                            <div className="clear clearfix"></div>
                            <div className="clearfix"></div>
                            <div className="clear clearfix"></div>
                        </div>

                        <div className="col-12 col-lg-12 col-md-12 pagetext">
                            <div style={{ overflowX: "auto" }}>
                                <table className="table table-striped table-bordered table-hover table-responsive" width="100%">
                                    <tbody>
                                        <tr className="text-large" style={{ background: "#f6d9ad", color: "#000" }} align="center">
                                            <th className="font-weight-500">S No.</th>
                                            <th className="font-weight-500">Fees Structure</th>
                                            <th className="font-weight-500">Download</th>
                                        </tr>
                                        <tr>
                                            <td align="center">1.</td>
                                            <td align="center">Boarder Fee Structure</td>
                                            <td align="center"><a href="" target="blank" rel="noopener"><img decoding="async" src="https://apsindore.com/wp-content/uploads/2022/12/download.png" data-no-retina="" /></a></td>
                                        </tr>
                                        <tr>
                                            <td align="center">2.</td>
                                            <td align="center">Boarder CEP (Competitive Exam JEE/NEET &amp; Olympiad Preparation) Fee Structure</td>
                                            <td align="center"><a href="" target="blank" rel="noopener"><img decoding="async" src="https://apsindore.com/wp-content/uploads/2022/12/download.png" data-no-retina="" /></a></td>
                                        </tr>
                                        <tr>
                                            <td align="center">3.</td>
                                            <td align="center">Day Scholar Fee Structure</td>
                                            <td align="center"><a href="" target="blank" rel="noopener"><img decoding="async" src="https://apsindore.com/wp-content/uploads/2022/12/download.png" data-no-retina="" /></a></td>
                                        </tr>
                                        <tr>
                                            <td align="center">4.</td>
                                            <td align="center">Day Scholar CEP (Competitive Exam JEE/NEET &amp; Olympiad Preparation) Fee Structure </td>
                                            <td align="center"><a href="" target="blank" rel="noopener"><img decoding="async" src="https://apsindore.com/wp-content/uploads/2022/12/download.png" data-no-retina="" /></a></td>
                                        </tr>

                                    </tbody></table>
                            </div></div>
                    </div>
                </div>
            </section>
        </div></div>
    )
}

export default FeesStructure;