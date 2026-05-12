import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { profile, skills, educationItems, experienceItems, contactLinks } from './data/profile'
import { certifications } from './data/projects'

function useRevealOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])
}

function App() {
  useRevealOnScroll()
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('theme')

    if (savedTheme) {
      return savedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const themeLabel = useMemo(() => (theme === 'dark' ? 'Light mode' : 'Dark mode'), [theme])

  return (
    <div className="app-shell">
      <Navbar
        links={profile.navLinks}
        theme={theme}
        themeLabel={themeLabel}
        onThemeToggle={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))}
      />

      <main>
        <Hero profile={profile} />
        <Skills skills={skills} />
        <Projects certifications={certifications} />
        <Timeline
          eyebrow="Education"
          heading="Academic background"
          id="education"
          items={educationItems}
        />
        <Timeline
          eyebrow="Experience"
          id="experience"
          items={experienceItems}
        />
        <Contact profile={profile} contactLinks={contactLinks} />
      </main>

      <Footer profile={profile} />
    </div>
  )
}

export default App