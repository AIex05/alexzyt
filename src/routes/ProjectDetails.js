import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const ProjectDetails = () => {
  const { id } = useParams();
  const {
    data: project,
    error,
    isPending,
  } = useFetch("http://localhost:8000/projects/" + id);
  return (
    <div className="projectDetails">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {project && (
        <div class="container">
          <div className="row">
            <div clasƒsName="two columns">
              <p></p>
            </div>
            <div
              clasƒsName="eight columns"
              style={{ justifyContent: "center" }}
            >
              <h2>{project.title}</h2>
              <p>Start time:{project.start}</p>
              <p>End time: {project.end}</p>
              <div>{project.body}</div>
            </div>
            <div clasƒsName="two columns">
              <p></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
