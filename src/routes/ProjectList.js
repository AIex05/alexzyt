import { Link } from "react-router-dom";
import styled from "styled-components";
const ProjectList = ({ projects }) => {
  const NavUnlisted = styled.ul`
    text-decoration: none;
  `;
  return (
    <div className="project-list">
      <NavUnlisted>
        {projects.map((project) => (
          <div className="row" key={project.id}>
            <div className="eight columns offset-by-two" style={{ justifyContent: "center" }}>
              <Link to={`/projects/${project.id}`}>
                <div className="row">
                  <h2>{project.title}</h2>
                </div>
                <div className="row">
                  <div className="ten columns">
                    <p></p>
                  </div>
                  <div className="two columns">
                    <p>{project.start}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="ten columns">
                    <p></p>
                  </div>
                  <div className="two columns">
                    <p>{project.end}</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </NavUnlisted>
    </div>
  );
};

export default ProjectList;
