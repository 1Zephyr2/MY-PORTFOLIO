function Timeline({ eyebrow, heading, id, items }) {
  return (
    <section className="section" id={id}>
      <div className="container" data-reveal>
        <div className="section-heading">
          <p className="eyebrow">{eyebrow}</p>
          {heading ? <h2>{heading}</h2> : null}
        </div>

        <div className="timeline">
          {items.map((item) => (
            <article className="timeline-item panel" key={item.title}>
              <p className="timeline-meta">{item.period}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline