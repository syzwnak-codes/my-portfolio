function Projects() {
    const projectList = [
      {
        title: "Project One",
        description: "Short explanation about this project."
      },
      {
        title: "Project Two",
        description: "Another project you're proud of."
      }
    ];
  
    return (
      <section>
        <h2>Projects</h2>
  
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </section>
    );
  }
  
  export default Projects;
  