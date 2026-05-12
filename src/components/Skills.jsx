function Skills({ skills }) {
  return (
    <section className="section" id="skills">
      <div className="container" data-reveal>
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>Things I am proficient in</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skillGroup) => (
            <article className="panel" key={skillGroup.title}>
              <h3>{skillGroup.title}</h3>
              <ul className="tag-list">
                {skillGroup.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills