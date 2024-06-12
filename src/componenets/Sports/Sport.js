import React from "react";
import Navbar from "../Navbar";

function Sport() {
  return (
    <div>
      <Navbar />
      <div className="animated-facility">
        <p>SPORTS</p>
        <hr className="styled-hr" />
      </div>
      <div className="Sportintro">
        <p className="sportpara">
          "Welcome to the exhilarating world of sports at our school! Our
          vibrant sports program is designed to foster teamwork, skill
          development, and a passion for physical fitness. From heart-pounding
          competitions to friendly matches, our students have the opportunity to
          engage in a variety of sports, promoting a healthy and active
          lifestyle. Whether you're a seasoned athlete or just starting out, our
          sports program encourages participation, sportsmanship, and a sense of
          camaraderie. Join us on the field, court, or track as we celebrate the
          joy of sports and the invaluable life lessons they impart. Let's
          embrace the thrill of the game together!"
        </p>
      </div>
      <div className="sportinfo">
        <p>INDOOR GAMES</p>
        <div className="Indoorgame">
          <i className="fa-solid fa-turn-up Icon"></i>
          <i className="fa-solid fa-sort-up Mediaqueryicon"></i>
          <span className="indorgamedescription">
            Indoor games offer a convenient and enjoyable way to unwind and have
            fun within the comfort of four walls. From traditional board games
            to energetic activities like table tennis or mini-basketball, indoor
            games cater to diverse preferences. They provide an excellent avenue
            for socializing, family bonding, and honing strategic thinking
            skills. With the added benefit of being weather-independent, indoor
            games offer a quick and accessible escape into the realm of
            entertainment and friendly competition.
          </span>
        </div>
      </div>
      <div className="sportinfo">
        <p className="Outdoorgame">OUTDOOR GAMES</p>
        <div className="Indoorgame">
          <i className="fa-solid fa-sort-up Mediaqueryicon"></i>
          <span className="indorgamedescription">
            Outdoor games offer a lively way to stay active and enjoy the
            outdoors. From soccer to biking, these activities promote fitness
            and social interaction. The open spaces serve as a natural
            playground, encouraging a healthy lifestyle and a break from indoor
            routines. Whether playing sports or enjoying recreational games,
            outdoor activities provide a refreshing way to connect with nature.
            In essence, outdoor games are a simple and enjoyable way to stay fit
            and have fun in the open air.
          </span>
          <i className="fa-solid fa-turn-down Icon"></i>
        </div>
      </div>
      <div className="sportinfo">
        <p>extracurricular </p>
        <div className="Indoorgame">
          <i className="fa-solid fa-turn-up Icon"></i>
          <i className="fa-solid fa-sort-up Mediaqueryicon"></i>
          <span className="indorgamedescription">
            Extracurricular activities are vital for a student's overall
            development. They extend beyond the regular academic curriculum,
            encompassing sports, clubs, community service, and the arts.
            Participation in these activities not only enhances academic
            performance but also fosters essential life skills, teamwork, and
            leadership qualities. By engaging in extracurriculars, students gain
            valuable experiences that contribute to their personal growth and
            well-rounded education.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Sport;
