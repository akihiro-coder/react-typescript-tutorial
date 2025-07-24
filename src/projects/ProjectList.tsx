import { useState } from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from "./ProjectForm";

interface ProjectListProps {
  projects: Project[];
  onSave: (project: Project) => void;
}

function ProjectList({ projects, onSave }: ProjectListProps) {
    // projectBeingEdited: 現在編集中のプロジェクトを保持する状態（編集していないときは null ）
    // setProjectBeingEdited: 編集中のプロジェクトを更新する関数
    const [projectBeingEdited, setProjectBeingEdited] = useState<Project | null>(null);

    const handleEdit = (project: Project) => {
        setProjectBeingEdited(project);
    };

    const cancelEditing = () => {
        setProjectBeingEdited(null);
    };

    return (
        <div className="row">
            {projects.map((project) => (
                <div key={project.id} className="cols-sm">
                    {project === projectBeingEdited ? (
                        <ProjectForm
                            onSave={onSave}
                            onCancel={cancelEditing}
                        />
                    ) : (
                        <ProjectCard
                            project={project}
                            onEdit={handleEdit}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}

export default ProjectList;