import React, { useEffect, useState } from "react";

function Intro() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div>
      <div className="Schoolshortintro">
        <p>Welcome to "YOUR SCHOOL'S NAME" school</p>
        <hr style={{ background: "black", width: "50%" }} />
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut <br />
          labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </span>
      </div>

      <div className="Intro-Cards">
        <div>
          <CardDetail animate={animate} delay={0}>
            <img src="./Cardimage/icon5.png" />
            <p> Awesome Teachers</p>
            Vivamus interdum, mauris interdum quis curdum sodales
          </CardDetail>
        </div>
        <div>
          <CardDetail animate={animate} delay={2}>
            <img src="./Cardimage/icon7.png" />
            <p> Best Program</p>
            Etiam risus neque, volutpat vel laoreet a, finibus volutpat non
          </CardDetail>
        </div>
        <div>
          <CardDetail animate={animate} delay={3}>
            <img src="./Cardimage/icon8.png" />
            <p> Sports</p>
            Sports are physical activities or games that involve skill and
            competition.
          </CardDetail>{" "}
        </div>
        <div>
          <CardDetail animate={animate} delay={4}>
            <img src="./Cardimage/sport.png" />
            <p> Global Certificate</p>
            Pelleneget tespharetra que fringilla egugue id eget pharetra
          </CardDetail>
        </div>
      </div>
    </div>
  );
}

const CardDetail = ({ animate, delay, children }) => {
  const style = {
    opacity: animate ? "1" : "0",
    transform: animate
      ? "translateX(0) scale(1)"
      : "translateX(-100%) scale(0.8)",
    boxShadow: animate ? "0 4px 8px rgba(0, 0, 0, 0.1)" : "none",
    transition: `opacity 1s, transform 1s, boxShadow 1s ${delay * 0.5}s`,
  };

  return (
    <div className="Cards-detail" style={style}>
      {children}
    </div>
  );
};

export default Intro;
