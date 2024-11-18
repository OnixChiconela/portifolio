import ProjectHead from "../components/projects/ProjectHead"
import { Project } from "../types"

interface ProjectClientProps {
    project: Project
}
const ProjectClient: React.FC<ProjectClientProps> = ({
    project
}) => {
    return (
        <div className="max-w-screen-lg mx-auto">
            <div>
                <ProjectHead 
                    title={project.title}
                    coverImage={project.coverImage}
                    subtitle=""
                />
            </div>

        </div>
    )
}

export default ProjectClient