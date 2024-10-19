// ProjectDashboard.jsx
import React, { useContext } from 'react';
import { ProjectContext } from './ProjectContext';
import ProjectCard from './ProjectCard';
import ListContainer from './ListContainer';

const Dashboard = () => {
  const { projects } = useContext(ProjectContext);

  return (
    <ListContainer
      title="Project List"
      items={projects}
      renderItem={(project) => <ProjectCard key={project.id} project={project} />}
      emptyMessage="No projects found."
    />
  );
};

export default ProectDashboard;



