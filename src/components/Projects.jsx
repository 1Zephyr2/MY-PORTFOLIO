import ProjectCard from './ProjectCard'

function Projects({ certifications }) {
  return (
    <section className="section section-alt" id="certifications">
      <div className="container">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Certifications</p>
          <h2>Certificates and Workshops/Seminars</h2>
          <p className="section-copy">
            These are the certifications and courses I have completed.
          </p>
        </div>

        <div className="projects-grid">
          {certifications.map((certification) => (
            <ProjectCard key={certification.title} project={certification} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects