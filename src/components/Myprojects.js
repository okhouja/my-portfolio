import React, { useState } from "react";
import Data from "../data.json";

const Myprojects = ({ projects }) => {
  // const [project, setproject] = useState([]);
  return (
    <React.Fragment>
      <div className="heroproject__container">
        <h2 className="heroProSection">My ProJects</h2>
        <div className="heroProjtext">
          Work projects that I did while learning at Digital Career Institute
          School.
        </div>
        <main className="projects__container">
          <div className="projectsGallery">
            {Data.map((el) => (
              <a href={el.link}>
                <img
                  className="project_Image"
                  src={require(`../img/${el.img}`).default}
                  key={el.id}
                />
                <p>{el.info}</p>
              </a>
            ))}
          </div>
        </main>
      </div>
      ;
    </React.Fragment>
  );
};
export default Myprojects;
