import fetchProjects from '../fetchProjects';

const Projects = () => {
  const teste = fetchProjects();
  console.log(teste);
  return <div>Projects</div>;
};
export default Projects;
