import React from "react";
import Navbar from "../Navbar";
// import "./Infastructe.css"; // Import your CSS file

function Infastructe() {
  return (
    <div>
      <div >
        <div style={{ zIndex: '2' }}>
          <Navbar />
        </div>
        <div className="overlay-container" style={{ zIndex: "-3" }}>
          <div className="Infastructer">
            <img
              src="./Schoolbus/Schoolbus.jpg"
              alt="School Bus"
              className="Schoolbusimg"
              style={{ zIndex: '-3' }}
            />
            <div className="overlay-text">
              <p>Transportation</p>
              <p>
                <span style={{ color: "yellow" }}> RAJIV PUBLIC SCHOOL</span> ||
                Transportation
              </p>
            </div>
          </div>
        </div>

        <div className="buspoints">
          <h1 className="school">RAJIV PUBLIC SCHOOL</h1>
          <h2>Bus Services</h2>
          <p>
            <strong>1. Safe and Reliable Transportation:</strong> Emphasize the
            safety and reliability of the school's transportation services,
            ensuring parents' peace of mind.
          </p>
          <p>
            <strong>2. Dedicated and Trained Drivers:</strong> Highlight the
            qualifications and training of the school bus drivers to reassure
            parents about the competence and responsibility of those entrusted
            with their children's safety.
          </p>
          <p>
            <strong>3. Well-Maintained Fleet:</strong> Showcase the school's
            commitment to maintaining a fleet of well-equipped and regularly
            serviced buses to ensure smooth and trouble-free transportation.
          </p>
          <p>
            <strong>4. Adherence to Safety Regulations:</strong> Communicate the
            school's strict adherence to local and national safety regulations to
            provide a secure commuting environment for students.
          </p>
          <p>
            <strong>5. Convenient Bus Routes:</strong> Provide information on
            well-planned and convenient bus routes that cover various
            neighborhoods to accommodate a diverse student population.
          </p>
          <p>
            <strong>6. Timely Departures and Arrivals:</strong> Assure parents of
            the punctuality of the bus service with clear departure and arrival
            schedules, minimizing disruptions to the students' daily routines.
          </p>
          <p>
            <strong>7. Communication Channels:</strong> Highlight effective
            communication channels between parents and the transportation
            department for updates, emergencies, or general inquiries.
          </p>
          <p>
            <strong>8. Real-Time Tracking:</strong> If available, mention any
            technology-enabled features like real-time tracking systems that allow
            parents to monitor the bus's location.
          </p>
          <p>
            <strong>9. Special Needs Accommodations:</strong> Communicate the
            school's commitment to accommodating students with special needs,
            providing a safe and comfortable transportation experience for all.
          </p>
          <p>
            <strong>10. Bus Conduct and Discipline:</strong> Outline the school's
            expectations regarding student behavior on the bus, reinforcing a
            positive and disciplined atmosphere during transportation.
          </p>
          <p>
            <strong>11. Parent Involvement:</strong> Encourage parent involvement
            by detailing how parents can participate in bus-related activities,
            committees, or feedback sessions to foster a collaborative community.
          </p>
          <p>
            <strong>12. Emergency Preparedness:</strong> Assure parents of the
            school's preparedness for emergencies, including communication plans,
            evacuation procedures, and staff training.
          </p>
          <p>
            <strong>13. Environmental Initiatives:</strong> If applicable, mention
            any eco-friendly practices in the transportation department, such as
            fuel-efficient buses or participation in environmental awareness
            programs.
          </p>
          <p>
            <strong>14. Bus Amenities:</strong> Highlight any additional amenities
            provided on the buses, such as air conditioning, seat belts, or
            age-appropriate seating arrangements.
          </p>
          <p>
            <strong>15. Transparent Policies:</strong> Provide access to school
            transportation policies, including guidelines for eligibility, fees,
            and any specific rules or regulations parents should be aware of.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Infastructe;
