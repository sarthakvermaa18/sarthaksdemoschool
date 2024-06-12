import React from 'react'
import Navbar from '../Navbar'

function PrincipalMsg() {
    return (
        <>
        <Navbar/>
            <div>
                < section className="Principal-main-section" >
                    <div className="container">
                        <div className="row">

                            <div className="Principal-content">
                                <div className='MissionVision-headings'>
                                    <span className='MissionVision-head'><h6>Principal's Message</h6></span>
                                    <span className='Principal-HLine'></span>
                                </div>
                                
                                <div className="row msg-content">
                                    <h4>"Empowering Tomorrow: Guiding Our Students to Embrace Elevated Ideals and Walk the Path of Integrity"</h4>
                                    <div className="col-md-3">
                                        <img src="./Principal-msg/principal-img1.jpg" />
                                    </div>
                                    <div className="col-md-9">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aspernatur recusandae similique odit excepturi quos! Placeat eaque aliquid exercitationem! Quas aliquam quibusdam debitis perferendis dignissimos.</p>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, error! Temporibus ex aspernatur pariatur molestiae distinctio nemo fugit sunt cum, nisi sequi nam repellendus voluptas doloremque quia vitae quasi natus perferendis eum dolor nesciunt dignissimos.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut impedit ratione consequatur voluptates, quis deleniti excepturi reiciendis fugiat, quasi expedita consequuntur minus voluptatem repellat blanditiis.</p>
                                        <div className="direct-desc">
                                            <h5>Principal Name</h5>
                                            <h6>Principal</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section >
            </div>
        </>
    )
}

export default PrincipalMsg


