import fetchProjects from '../fetchProjects';

const Projects = () => {
  const { isLoading, projects } = fetchProjects()

  if (isLoading) {
    return (
      <section className='loading'></section>
    )
  }

  return (
    <section className='projects'>
      <div className='title'>
        <h2>projects</h2>
        <div className='title-underline'></div>
      </div>
      <div className="projects-center">
        {projects.map(project => {
          const { id, title, url, img } = project
          return (
            <a key={id} href={url} target='_blank'
              rel='noreferrer' className='project'>
              <img src={img} alt={title} className='img' />
              <h5>{title}</h5>
            </a>
          )
        })}
      </div>
    </section>
  )
};

export default Projects;
