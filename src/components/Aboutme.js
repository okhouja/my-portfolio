import React from "react";

const Aboutme = () => {
  let myyear = new Date().getFullYear() - 1982;

  return (
    <React.Fragment>
      <div className="aboutme__Container">
        <div className="aboutme__title">
          About Me
          <div className="aboutme__Header">
            My name is Omar Khouja. I'm {myyear} Years Old, and Live in Hamburg
          </div>
          <div className="aboutme__Main">
            I came from Aleppo - Syria, I live in Hamburg - Germany since 2015.
            I studied two years at the Technical Institute of Electricity and
            Mechanics in Aleppo - Communications Department. I worked in IT
            Department most of the Time and my dream always learning Web
            Development and now I learning Web Development at Digital Career
            Institute School.
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Aboutme;
