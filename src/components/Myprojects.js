import React from "react";

const Myprojects = (projects) => {
  return (
    <React.Fragment>
      <div className="heroproject__container">
        <h2 className="heroProSection">My ProJects</h2>
        <div className="heroProjtext">
          Work projects that I did while learning at Digital Career Institute
          School
        </div>
        <main>
          {/* <div className="projectsGallery">{projects.map((el) => el)}</div> */}
        </main>
      </div>
      ;
    </React.Fragment>
  );
};
export default Myprojects;
