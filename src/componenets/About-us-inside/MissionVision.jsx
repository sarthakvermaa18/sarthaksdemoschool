import React from 'react'

function MissionVision() {
  return (
    <>
      <div className='MissionVision-Main-Section'>
        <div className='container'>
          <div className='missionORvision'>

            <div className='vision'>
              <div className='icon-container'>
                <i className="fa-solid fa-eye m-v-icon"></i>
              </div>
              <div className='MissionVision-headings'>
                <span className='MissionVision-head'><h6>Our Vision</h6></span>
                <span className='MissionVision-HLine'></span>
              </div>

              <ul>
                <li><strong>Vibrant Community:</strong> Celebrating individual talents, nurturing curiosity, and fostering innovation.</li>
                <li><strong>Dynamic Learning:</strong> Cultivating creativity, critical thinking, and collaboration to empower global citizens.</li>
                <li><strong>Lifelong Learning:</strong> Inspiring a love for learning, igniting imaginations, and preparing for future challenges.</li>
                <li><strong>Excellence & Inclusivity:</strong> Shaping a future where excellence, diversity, and inclusivity are central, fostering respect and empathy.</li>
              </ul>
            </div>
            <div className='mission'>
              <div className='icon-container'>
                <i className="fa-solid fa-rocket m-v-icon"></i>
              </div>
              <div className='MissionVision-headings'>
                <span className='MissionVision-head'><h6>Our Mission</h6></span>
                <span className='MissionVision-HLine'></span>
              </div>
              <ul>
                <li>"Our mission is to provide a supportive and inclusive environment for all students, empowering each one to reach their full potential academically, socially, and emotionally. We achieve this through innovative teaching methods and personalized learning."</li>
                <li>"In our pursuit of excellence, we cultivate critical thinking and teamwork. Through dynamic experiences, we foster curiosity and exploration."</li>
                <li>"We prioritize active engagement, encouraging ownership and passion. By providing a platform for growth, we empower students."</li>
                <li>"We instill a passion for lifelong learning, nurturing curiosity for personal fulfillment and success."</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default MissionVision