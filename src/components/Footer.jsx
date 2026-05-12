function Footer({ profile }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>{profile.name}</p>
      </div>
    </footer>
  )
}

export default Footer