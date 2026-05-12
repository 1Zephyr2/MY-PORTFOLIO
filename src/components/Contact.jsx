function Contact({ profile, contactLinks }) {
  return (
    <section className="section section-contact" id="contact">
      <div className="container contact-grid" data-reveal>
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let us connect</h2>
          <p className="section-copy">
            Contact me through the following platforms.
          </p>
        </div>

        <div className="panel contact-panel">
          <p className="contact-name">{profile.name}</p>
          <a className="contact-phone" href={`tel:${profile.phone}`}>
            {profile.phone}
          </a>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>

          <div className="contact-links">
            {contactLinks
              .filter((link) => link.label === 'LinkedIn')
              .map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact