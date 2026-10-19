function Hero() {
  const scrollTo = (event) => { event.preventDefault(); document.querySelector(event.currentTarget.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' }) }
  return <section id="home" className="hero"><div className="hero-content"><h1 className="hero-title">Alex Johnson</h1><p className="hero-subtitle">Frontend Developer & UI Designer</p><p className="hero-tagline">Creating beautiful, responsive web experiences with modern technologies</p><div className="hero-buttons"><a href="#projects" className="btn btn-primary" onClick={scrollTo}>View Projects</a><a href="#contact" className="btn btn-secondary" onClick={scrollTo}>Get In Touch</a></div></div></section>
}
export default Hero
