
import React from 'react'
import { Parallax } from 'react-parallax';
function ParallexComp() {
    return (
        <>

            <div className='parallex-main-container'>
                <Parallax className='Parallax-img-container' bgImage="./Parallex-img/Building-School.jpg" strength={700} style={{ height: "50vh" }}>
                    <div className='dark-overlay'></div>
                    <div className='Parallex-Txt-content'>
                        <span className='ParaTxt'>CAMPUS VIDEO</span>
                        <span className='Parallex-HorizontalLine'></span>
                    </div>

                </Parallax>
            </div>
            <div className='Parallex-image-section'>
                <div className='Para-img'>
                    <a className="popup-youtube" href="https://www.youtube.com">
                        <img src="./Parallex-img/youtube-play.png" alt="img not found"/>
                    </a>
                    <span className='p-img'><img src="./Parallex-img/Building-School.jpg" alt="Building School" /></span>
                </div>
            </div>

        </>
    )
}

export default ParallexComp;