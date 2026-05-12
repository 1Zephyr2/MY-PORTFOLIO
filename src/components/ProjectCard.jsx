function ProjectCard({ project }) {
  return (
    <article className="project-card panel" data-reveal>
      {project.certificateImageUrl ? (
        <a href={project.certificateImageUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} certificate image`}>
          <img className="project-image" src={project.certificateImageUrl} alt={`${project.title} certificate preview`} />
        </a>
      ) : null}

      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.issuer}</p>
        <p>{project.date}</p>
        <p>{project.description}</p>

        <ul className="tag-list">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="project-actions">
          {project.certificateImageUrl ? (
            <a className="button button-primary" href={project.certificateImageUrl} target="_blank" rel="noreferrer">
              View Certificate
            </a>
          ) : null}
          {project.verifyUrl ? (
            <a className="button button-secondary" href={project.verifyUrl} target="_blank" rel="noreferrer">
              Verify
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard