import React from "react";
import Navbar from "../Navbar";

function Facility() {
  return (
    <div>
      <Navbar />
      <div className="animated-facility">
        <p>FACILITY</p>
        <hr className="styled-hr" />
      </div>

      <div className="Smartclasses">
        <h2> Smart-Classes </h2>
        <div className="smartclassdescriptioncontainer">
          <div className="smartclassdescription">
            <p>
              SmartClass is an advanced educational platform integrated into our
              school system. It transforms traditional classrooms into
              interactive spaces, utilizing multimedia content and collaborative
              tools for an engaging learning experience. With dynamic visuals
              and real-time discussions, SmartClass enhances understanding and
              caters to diverse learning styles. Accessible anytime, anywhere,
              it promotes flexibility and active participation, preparing
              students for the challenges ahead.
            </p>
          </div>
          <div>
            <img src="./Smartclass/Smartclass.jpg" className="Smartclassimg" alt="Not-Found"/>
          </div>
        </div>
      </div>
      <div className="Smartclassess">
        <h2 className="science"> Science-Lab </h2>
        <div className="smartclassdescriptioncontainer">
          <div>
            <img src="./Smartclass/Sciencelab.jpg" className="Smartclassimg" alt="Not-Found"/>
          </div>
          <div className="smartclassdescription">
            <p>
              Our science lab is a vibrant space where students explore and
              experiment, turning theoretical knowledge into practical
              understanding. Equipped with modern tools and guided by
              experienced faculty, students engage in hands-on activities,
              fostering a passion for scientific inquiry. It's a hub of
              curiosity, sparking exploration and critical thinking among our
              students.
            </p>
          </div>
        </div>
      </div>
      <div className="Smartclasses">
        <h2>Innovative-Activites</h2>
        <div className="smartclassdescriptioncontainer">
          <div className="smartclassdescription">
            <p>
              In our pursuit of fostering creativity and innovation, we offer a
              diverse range of innovative activities at our school. From
              robotics workshops to entrepreneurship challenges, students have
              the opportunity to explore their creativity and problem-solving
              skills. These activities go beyond traditional learning,
              encouraging students to think outside the box and apply their
              knowledge in real-world scenarios. Our commitment to innovation
              aims to inspire a generation of forward-thinkers, equipped with
              the skills and mindset to tackle the challenges of the future.
            </p>
          </div>
          <div>
            <img
              src="./Smartclass/Innovativeactivity.jpg"
              className="Smartclassimg"
              alt="Not-Found"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facility;
