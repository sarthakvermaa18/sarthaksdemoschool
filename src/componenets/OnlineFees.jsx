import React from 'react';
import Navbar from './Navbar';

const OnlineFees = () => {
    return (
        <div className="all_home_componenets w-100">
        <div>
            <Navbar/>
            <section className="wow fadeIn padding-35px-tb page-title-small top-space" style={{ backgroundColor: '#f9cc0b', padding: ' 30px 0px', visibility: 'visible', animationName: "fadeIn" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-md-12 text-center">
                            <h4 className="fs-1 text-white  mb-0 text-uppercase" style={{fontWeight:'600'}}>Schools of school name</h4>
                            <h5 className="fs-4 text-white  mb-0 text-uppercase"style={{fontWeight:'600'}}>Online Fee/Charges Payment</h5>
                        </div>
                    </div>
                </div>
            </section>
            <section className="padding-5px-top md-padding-5px-top sm-padding-5px-top">
                <div className="container">
                    <div className="row justify-content-center m-0" style={{ minHeight: "500px" }}>
                        <div className="col-12 col-lg-10 md-margin-15px-bottom">
                            
                            <div className="mt-5 bg-light-gray border-radius-6 lg-padding-five-all sm-padding-10px-all bg-light p-5">
                                <form className='' action="/index.php" method="post" name="myform" id="myform" style={{ fontFamily: "calibri" }} noValidate="noValidate">
                                    <div className="row justify-content-center pb-3" style={{ display: "none" }}>
                                        <div className="col-md-4 text-md-right text-left"><span className="text-extra-large line-height-50 padding-20px-bottom">Payment For <span className="required">*</span> : </span></div>
                                        <div className="col-md-7">
                                            <input type="radio" checked="" id="payment_for1" name="payment_for" value="1" style={{ width: "14px", height: "14px" }} />
                                            <input type="radio" id="payment_for2" name="payment_for" value="2" style={{ width: "14px", height: "14px" }} />
                                        </div>
                                    </div>
                                    <div className="row justify-content-center m-0 pb-3">
                                        <div className="col-md-3   fs-5"><span className="">Student Id Code <span className="text-danger">*</span> : </span></div>
                                        <div className="col-md-7">
                                            <input type="text" id="scholar_no" size="40" name="scholar_no" placeholder="Enter Student Id Code" value="" className="form-control" maxLength="200" autoComplete="off" />
                                        </div>
                                    </div>
                                    <div className="row justify-content-center m-0 pb-3">
                                        <div className="col-md-3 fs-5"><span className="text-extra-large line-height-50 padding-20px-bottom">Date of Birth <span className="text-danger">*</span> : </span></div>
                                        <div className="col-md-7">
                                            <input className="form-control" type="text" placeholder="DD-MMM-YYYY" id='birth_date' name="birth_date" autoComplete="off" />
                                       </div>
                                    </div>
                                    <div className="row justify-content-center m-0 pb-3">
                                        <div className="col-md-3 fs-5"><span className="text-extra-large line-height-50 padding-20px-bottom">Email Id <span className="text-danger">*</span> : </span></div>
                                        <div className="col-md-7">
                                            <input className="form-control" id="email_id" size="40" name="email_id" placeholder="Enter Email" type="text" autoComplete="off" maxLength="200" />
                                        </div>
                                    </div>
                                    <div className="row justify-content-center m-0 pb-3">
                                        <div className="col-md-4"></div>
                                        <div className="col-md-7" align="left">
                                            <input type="hidden" name="session_id_post" id="session_id_post" value="cmad6c6ktjoceoeei5ea7qrfo4" />
                                            <input type="submit" value="Login For Pay Fee" name="login" className="submit btn bg-primary text-light pe-5 ps-5" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
    );
}

export default OnlineFees;
