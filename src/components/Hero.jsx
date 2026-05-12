import { useEffect, useState } from 'react'

const heroPhotos = [
  {
    src: new URL('../../images/Me 1.png', import.meta.url).href,
    alt: 'Formal portrait of Lei Joshua P. Guevarra',
  },
  {
    src: new URL('../../images/Me 2.jpg', import.meta.url).href,
    alt: 'Informal portrait of Lei Joshua P. Guevarra',
  },
]

function Hero({ profile }) {
  const [typingText, setTypingText] = useState('')
  const [photoIndex, setPhotoIndex] = useState(0)

  useEffect(() => {
    const phrases = profile.typingLines?.length ? profile.typingLines : ['']
    let phraseIndex = 0
    let charIndex = 0
    let isDeleting = false
    let timeoutId

    const step = () => {
      const currentPhrase = phrases[phraseIndex]

      if (!isDeleting) {
        charIndex += 1
        setTypingText(currentPhrase.slice(0, charIndex))

        if (charIndex === currentPhrase.length) {
          isDeleting = true
          timeoutId = window.setTimeout(step, 1200)
          return
        }
      } else {
        charIndex -= 1
        setTypingText(currentPhrase.slice(0, charIndex))

        if (charIndex === 0) {
          isDeleting = false
          phraseIndex = (phraseIndex + 1) % phrases.length
          timeoutId = window.setTimeout(step, 300)
          return
        }
      }

      timeoutId = window.setTimeout(step, isDeleting ? 55 : 90)
    }

    timeoutId = window.setTimeout(step, 500)

    return () => window.clearTimeout(timeoutId)
  }, [profile.typingLines])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setPhotoIndex((currentIndex) => (currentIndex + 1) % heroPhotos.length)
    }, 3200)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy" data-reveal>
          <h1>{profile.name}</h1>
          <p className="hero-lead">{profile.intro}</p>

          <p className="typing-line" aria-live="polite">
            <span className="typing-label">Skills:</span> {typingText}
            <span className="typing-cursor" aria-hidden="true">|</span>
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#certifications">
              View Certifications
            </a>
            <a className="button button-secondary" href={profile.cvUrl} download>
              Download CV
            </a>
          </div>

          <ul className="hero-highlights">
            {profile.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>

        <div className="hero-card" data-reveal>
          <div className="hero-photo-switcher" aria-label="Profile photo slideshow">
            <figure key={photoIndex} className="hero-photo hero-photo-active">
              <img src={heroPhotos[photoIndex].src} alt={heroPhotos[photoIndex].alt} loading="eager" />
            </figure>
          </div>
          <div className="hero-card-info">
            <p>{profile.location}</p>
            <p>{profile.educationSummary}</p>
            <p>{profile.focusArea}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero