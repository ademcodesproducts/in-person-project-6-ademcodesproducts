// Week 8 starter: React State & Interactive Components
// TODO: Break down your week 7 monolithic component into separate components
// Each component should manage its own state as appropriate

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const projects = [
  { id: 1, title: 'E-Commerce Platform', category: 'fullstack', label: 'Full-Stack', color: '4f46e5', description: 'A modern e-commerce platform with a shopping cart, payments, and an admin dashboard.', tags: ['React', 'Node.js', 'MongoDB', 'Stripe'], featured: true },
  { id: 2, title: 'Weather Dashboard', category: 'frontend', label: 'Frontend', color: '059669', description: 'A clean weather dashboard with location search, forecasts, and animations.', tags: ['JavaScript', 'CSS3', 'API'] },
  { id: 3, title: 'Task Management App', category: 'webapp', label: 'Web App', color: 'dc2626', description: 'A productivity app with collaboration and deadline tracking.', tags: ['React', 'TypeScript', 'Firebase'] },
  { id: 4, title: 'Creative Portfolio', category: 'design', label: 'Design', color: '7c3aed', description: 'A responsive portfolio site for a graphic designer with interactive galleries.', tags: ['HTML5', 'CSS3', 'GSAP'] },
  { id: 5, title: 'Recipe Finder', category: 'frontend', label: 'Frontend', color: '0f766e', description: 'A recipe discovery experience powered by a public food API.', tags: ['React', 'API', 'CSS'] },
  { id: 6, title: 'Habit Tracker', category: 'webapp', label: 'Web App', color: 'ea580c', description: 'A focused daily habit tracker with progress insights.', tags: ['React', 'Local Storage', 'Charts'] },
]

function App() {
  return (
    <div className="portfolio">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects projects={projects} />
      <Contact />
      <Footer projectCount={projects.length} />
    </div>
  )
}

export default App
