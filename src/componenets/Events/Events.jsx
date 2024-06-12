import React, { useEffect } from 'react'
import Navbar from '../Navbar';
import { NavLink } from 'react-router-dom';

function Events() {
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
            <div className=' pt-5 events-main-container'>
                <div className='container'>
                    <div className='main-card-events'>
                        <NavLink to="/enviroment-day" className="text-decoration-none">
                            <div className="card-events">
                                <div className='boxes'>
                                    <div className='card-events-images'>
                                        <img src="./Events-img/plant+soil.jpg" alt='plant+soil-girl_img' />
                                    </div>
                                    <div className="card-events-body">
                                        <h2>Environment Day</h2>
                                        <p> Empowering students to champion environmental awareness and sustainable practices for a better future.</p>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to="/workshops-students" className="text-decoration-none">
                            <div className="card-events">
                                <div className='boxes'>
                                    <div className='card-events-images'>
                                        <img src="./Events-img/WorkShop.jpg" alt='WorkShop_img' />
                                    </div>
                                    <div className="card-events-body">
                                        <h2>Workshops for students by Subject Expertise</h2>
                                        <p> Fostering creativity and sensitivity in teaching and learning methods for students' growth.</p>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to="/childrens-day" className="text-decoration-none">
                            <div className="card-events">
                                <div className='boxes'>
                                    <div className='card-events-images'>
                                        <img src="./Events-img/children-day.jpg" alt='children-day_img' />
                                    </div>
                                    <div className="card-events-body">
                                        <h2>Childrens Day</h2>
                                        <p>Teachers make children feel special on November 14th, emphasizing their pivotal role in school activities and curriculum.</p>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to="/independence-day" className="text-decoration-none">
                            <div className="card-events">
                                <div className='boxes'>
                                    <div className='card-events-images'>
                                        <img src="./Events-img/Indian-flag.jpg" alt='Indian-flag_img' />
                                    </div>
                                    <div className="card-events-body">
                                        <h2>Independence day/Republic day</h2>
                                        <p>Honoring freedom fighters, inspiring students to embrace citizenship values on Independence/Republic Day.</p>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to="/celebration" className="text-decoration-none">
                            <div className="card-events">
                                <div className='boxes'>
                                    <div className='card-events-images'>
                                        <img src="./Events-img/happy-holi.jpg" alt='children-day_img' />
                                    </div>
                                    <div className="card-events-body">
                                        <h2>Celebration of various festivals</h2>
                                        <p>Diwali, Dusshera, Holi, and more, embracing Indian culture with joyous celebrations.</p>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to="/teachers-day" className="text-decoration-none">
                            <div className="card-events">
                                <div className='boxes'>
                                    <div className='card-events-images'>
                                        <img src="./Events-img/teacher-day.jpg" alt='children-day_img' />
                                    </div>
                                    <div className="card-events-body">
                                        <h2>Teachers Day</h2>
                                        <p>A special day for mentors, where teachers revisit their childhood and are celebrated.</p>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to="/farewell" className="text-decoration-none">
                            <div className="card-events">
                                <div className='boxes'>
                                    <div className='card-events-images'>
                                        <img src="./Events-img/Farewell.jpg" alt='children-day_img' />
                                    </div>
                                    <div className="card-events-body">
                                        <h2>Farewell</h2>
                                        <p>A cherished tradition bidding farewell to students, marking the end of their school journey</p>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to="/talent-show" className="text-decoration-none">
                            <div className="card-events">
                                <div className='boxes'>
                                    <div className='card-events-images'>
                                        <img src="./Events-img/Talent-show.jpg" alt='children-day_img' />
                                    </div>
                                    <div className="card-events-body">
                                        <h2>Talent Show</h2>
                                        <p>A showcase of student talents in various areas such as singing, dancing, and comedy.</p>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>


        </div>
        </div>
    )
}

export default Events;