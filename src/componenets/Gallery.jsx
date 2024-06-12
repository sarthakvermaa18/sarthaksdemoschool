import React, { useState, useEffect } from 'react';
import { useParams ,NavLink} from 'react-router-dom';
import Navbar from './Navbar';
const Gallery = ({ data1 }) => {
    const { id } = useParams();
    let a = data1
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('Gallery.json');
                const json = await response.json();
                setData(json[a]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [a]);

    return (
        <div className="all_home_componenets">
        <div>
            <Navbar />
            <div className="All_data_center-nav-nat-child4 bg-warning">
                <div className='pt-4 pb-4 bg-warning teaching-staffs4 '>
                    <h2 style={{ fontWeight: "600" }} className='text-secondary text-uppercase'>{data1}</h2>
                    <h5 className='pt-2'>
                        <NavLink to='/events' className='text-decoration-none'> <span style={{ fontWeight: '600' }}> Events </span></NavLink> | <span style={{ fontWeight: '600',fontSize:"15px" }}className='text-uppercase'>{data1}</span>
                    </h5>
                </div>
            </div>
            <div className="auto-container ps-2 pe-5 " >
            <h1>{id}</h1>
                <div className=' d-flex flex-wrap gap-4 justify-content-center'>
                    {data.map((country, index) => (
                        <div key={index} >
                            <div className='teachers-section-child'>
                                <div className="class-thumb position-relative">
                                    <img style={{ borderRadius: "1rem 1rem" }} src={`${country.img}`} alt="Not found" className="w-100" />
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
        </div>
    );
};

export default Gallery;
