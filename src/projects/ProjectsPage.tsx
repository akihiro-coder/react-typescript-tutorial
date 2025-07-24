import ProjectList from './ProjectList.tsx'
import {MOCK_PROJECTS} from "./MockProjects.tsx";

function ProjectsPage() {
    return (
        <>
            <h1>Projects</h1>
            <ProjectList projects={MOCK_PROJECTS}/>
        </>
    )
}

export default ProjectsPage;