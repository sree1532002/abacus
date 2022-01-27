import React from "react";
import background from "./../images/bg1.jpg";
import "./../Events/eventsDetails.css";

function EventDetails() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        height: "100vh",
        color: "#f5f5f5",
      }}
    >
      <div class="container">
        <div class="box">
          <span></span>
          <div class="content">
            <h2 class="neon">RULES</h2>
            <p>
              1) The event is for a team of three participants (At Least 2
              participants)<br></br> 2) Problem statement will be provided on
              25th March, 2021 and participants are expected to present their
              prototype on 26th March, 2021 <br></br>3) Decisions made by the
              administrators will be final
            </p>
            {/* <a href="#">Read More</a> */}
          </div>
        </div>
        <div class="box">
          <span></span>
          <div class="content">
            <h2 class="neon">HACKATHON</h2>
            <p>
              Are you a tech-savvy individual who can collaborate intensively to
              innovate and develop influential solutions to a problem using
              technology? Then why do you wait? Fasten your belts and bump into
              the signature event of Abacus, where you need to team up and
              brainstorm your ideas to create a prototype. Registration Fee -
              Rs.100<br></br>
              <br></br>
              <b>CONTACT:</b> Kanika K - 8300295535 <br></br>
              <b>DATE:</b> 25-03-2021 & 26-03-2021<br></br>
            </p>
            {/* <a href="#">Read More</a> */}
          </div>
        </div>
        <div class="box">
          <span></span>
          <div class="content">
            <h2 class="neon">RULES</h2>
            <p>
              4) Participants must ensure that they have laptop with good
              internet connectivity for their convenience <br></br>5)
              Participants must ensure that they have microsoft account<br></br>
              6) Participants can contact the given contact for any doubts
              regarding the event.
            </p>
            {/* <a href="#">Read More</a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default EventDetails;
