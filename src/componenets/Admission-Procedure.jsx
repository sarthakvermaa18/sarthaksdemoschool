import React,{useEffect} from 'react'
import Navbar from './Navbar';

function Admission_Procedure() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, []);
    return (
        <div className='all_home_componenets'>
           <div>
            <Navbar/>
            <div className='Admission-Main-section pt-5 pb-5'>

                <div className="container">
                    <div className='vision'>
                        <div className='MissionVision-headings'>
                            <span className='MissionVision-head'><h6>ADMISSION PROCEDURE</h6></span>
                            <span className='MissionVision-HLine'></span>
                        </div>
                        <div className="admission-tagline-info text-center" style={{ color: "#0d3051", fontWeight: "700", fontSize: "20px" }}>
                            <p>The school is open for admission to both boys and girls irrespective of caste, creed or social status.</p>
                        </div>
                        <ul style={{ fontSize: "18px", fontWeight: "500" }}>
                            <li>The Application Form for Admission should be obtained from the School Office during office hours by paying a nominal fee</li>
                            <li><p>The Application Form for Admission should be duly filled and submitted in the School Office before the deadline along with the following documents:</p>
                                <ol>
                                    <li>A true copy of the Mark Sheet</li>
                                    <li>Original Transfer Certificate countersigned</li>
                                    <li>A true copy of Aadhar Card and SSSM ID</li>
                                    <li>Two Passport size photographs of the student</li>
                                    <li>Two Passport size photographs each of the parents</li>
                                </ol>
                                <p className='mt-3'>N.B. : Failure to provide any of the above documents will invalidate the application.  </p>
                            </li>
                            <li>
                                Once selected, the students should come along with their parents
                                to take admission.</li>
                            <li> Once the selection is confirmed, all the admission formalities
                                should be completed on the specified date and time, failing
                                which the candidates forfeit their selection for admission.</li>
                        </ul>
                    </div>
                </div>

            </div>
            </div>
        </div>
    )
}

export default Admission_Procedure;