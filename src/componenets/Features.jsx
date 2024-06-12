import React from 'react'

function Features() {
    return (
        <>
            <div className='Features-Main-Content'>
                <div className='Features-Card'>
                    <div className='Features-Card-1'>
                        <a target="blank" href="/">
                            <span><i className="fa-solid fa-book"></i></span>
                            <p>Registration for Admission</p>
                        </a>
                    </div>
                    <div className='Features-Card-1'>
                        <a target="blank" href="/">
                            <span><i className="fa fa-thermometer-empty" aria-hidden="true"></i></span>
                            <p>Prospectus &amp; Registration Form</p>
                        </a>
                    </div>
                    <div className='Features-Card-1'>
                        <a target="blank" href="/">
                            <span><i className="fa-solid fa-hands-asl-interpreting"></i></span>
                            <p>Fees Structure</p>
                        </a>
                    </div>
                    <div className='Features-Card-1'>
                        <a target="blank" href="/">
                            <span><i className="fa-solid fa-envelope"></i></span>
                            <p>Enquire Now</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features;