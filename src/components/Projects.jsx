import { useState } from 'react'

const filters = [['all', 'All Projects'], ['frontend', 'Frontend'], ['fullstack', 'Full-Stack'], ['design', 'Design'], ['webapp', 'Web App']]
function Projects({ projects }) {
  // State needed: which filter is active.
  const [activeFilter, setActiveFilter] = useState('all')
  const filteredProjects = activeFilter === 'all' ? projects : projects.filter((project) => project.category === activeFilter)
  return <section id="projects" className="section"><div className="container"><h2>Featured Projects</h2><div className="filter-buttons">{filters.map(([value, label]) => <button key={value} className={`filter-btn ${activeFilter === value ? 'active' : ''}`} onClick={() => setActiveFilter(value)}>{label}</button>)}</div><p className="text-center">Showing {filteredProjects.length} of {projects.length} projects</p><div className="projects-grid">{filteredProjects.map((project) => <article className={`project-card ${project.featured ? 'featured' : ''}`} key={project.id}><div className="project-image"><img src={`https://via.placeholder.com/400x250/${project.color}/ffffff?text=${encodeURIComponent(project.title)}`} alt={project.title} /><div className="project-overlay"><div className="project-links"><a href="#projects" className="project-link">🔗 Live Demo</a><a href="#projects" className="project-link">💻 Code</a></div></div></div><div className="project-content"><div className="project-header"><h3 className="project-title">{project.title}</h3><span className="project-category">{project.label}</span></div><p className="project-description">{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span className="project-tag" key={tag}>{tag}</span>)}</div></div></article>)}</div></div></section>
}
export default Projects
