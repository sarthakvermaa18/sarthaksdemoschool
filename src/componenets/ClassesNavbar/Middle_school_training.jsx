import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../Navbar'
import Staff from '../Staff'
const Middle_school_training = () => {
    return (
        <div>
            <Navbar />

            <div >
                <div className='pt-4 pb-4 bg-warning teaching-staffs '>
                    <h3 style={{ fontWeight: "600" }} className='text-secondary'>Middle School Teaching Staff</h3>
                    <h5>
                        <NavLink to='/' className='text-decoration-none'> <span style={{ fontWeight: '600' }}> Home </span></NavLink> | <span style={{ fontWeight: '600' }}> Teaching </span>
                    </h5>
                </div>
                <div className='pt-5 mt-5 pb-5'>
                    <Staff />
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
            </div>
        </div>
    )
}

export default Middle_school_training;