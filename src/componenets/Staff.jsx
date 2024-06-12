import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import { NavLink, useNavigate } from 'react-router-dom';
const Staff = () => {
    // let Nav = useNavigate();

    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('Staff.json');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="auto-container ps-5 pe-5 " >
                <div className=' d-flex flex-wrap gap-5 justify-content-center'>
                    {data.map((country, index) => (
                        <div key={index} >
                            <div style={{ width: "230px" }}>
                                <div className="class-thumb position-relative">
                                    <img style={{ borderRadius: "1rem 1rem 0 0", height: '200px' }} src={`${country.img}`} alt="" className="w-100" />
                                    <div className='position-absolute rounded-circle ps-2 pe-2 pt-1 pb-1 fs-4 text-white' style={{ backgroundColor: '#f89b32', bottom: '-4% ', right: "4%" }}><i className="bi bi-plus"></i></div>
                                    <div className='border-secondary border ' style={{ backgroundColor: '#135e9e', fontWeight: '900', height: '0.4rem' }}></div>
                                </div>
                                <div className="shadow border-top-0 pb-4 ps-4 pt-4 pe-2 " style={{ borderRadius: "0 0 1rem 1rem", }}>
                                    <h5 style={{ fontWeight: '600' }}>{country.name}</h5>
                                    <div className='text-secondary fs-6'>{country.sub}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Staff;
