const skills = [
  ['⚛️', 'React', 'Frontend Framework', 90], ['🎨', 'CSS3', 'Styling', 95], ['📱', 'Responsive Design', 'Design', 88],
  ['🚀', 'JavaScript', 'Programming', 85], ['🎯', 'Figma', 'Design Tools', 80], ['🌐', 'Node.js', 'Backend', 75],
]
function Skills() {
  return <section id="skills" className="section section-alt"><div className="container"><h2>Skills & Technologies</h2><div className="skills-grid">{skills.map(([icon, name, category, level]) => <div className="skill-card" key={name}><div className="skill-header"><span className="skill-icon">{icon}</span><h3 className="skill-name">{name}</h3></div><div className="skill-category">{category}</div><div className="skill-level"><div className="skill-progress" style={{ width: `${level}%` }}></div></div><span className="skill-percentage">{level}%</span></div>)}</div></div></section>
}
export default Skills
