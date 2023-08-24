import ProjectList from "./ProjectList";
import useFetch from "../hooks/useFetch";
const Projects = () => {
    const { error, isPending, data: projects } = useFetch('http://localhost:8001/projects')
    console.log(projects);
    return ( 
    <div className="projects">
        <h2 className="row" style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
        }}>Projects</h2>
        {isPending && <p>Loading....</p>}
        {projects && <ProjectList projects={projects} />}
    </div> );
}
 
export default Projects;