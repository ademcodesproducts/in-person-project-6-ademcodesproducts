import { useState } from 'react'

const emptyForm = { name: '', email: '', message: '' }
function Contact() {
  // State needed: input values and validation errors.
  const [formData, setFormData] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const validateField = (name, value) => {
    if (!value.trim()) return `${name[0].toUpperCase() + name.slice(1)} is required.`
    if (name === 'email' && !value.includes('@')) return 'Enter a valid email address.'
    if (name === 'message' && value.trim().length < 10) return 'Message must be at least 10 characters.'
    return ''
  }
  const handleChange = ({ target: { name, value } }) => { setFormData((previous) => ({ ...previous, [name]: value })); setIsSubmitted(false); if (errors[name]) setErrors((previous) => ({ ...previous, [name]: '' })) }
  const handleBlur = ({ target: { name, value } }) => setErrors((previous) => ({ ...previous, [name]: validateField(name, value) }))
  const handleSubmit = (event) => { event.preventDefault(); const nextErrors = Object.fromEntries(Object.entries(formData).map(([name, value]) => [name, validateField(name, value)])); setErrors(nextErrors); if (Object.values(nextErrors).every((error) => !error)) { setIsSubmitted(true); setFormData(emptyForm) } }
  return <section id="contact" className="section section-alt"><div className="container"><h2>Get In Touch</h2><div className="contact-content"><p>I'm always interested in hearing about new opportunities and projects. Feel free to reach out!</p><form className="contact-form" onSubmit={handleSubmit}><div className="form-grid">{Object.keys(formData).map((name) => <div className={`form-group ${name === 'message' ? 'form-group-full' : ''}`} key={name}><label htmlFor={name}>{name[0].toUpperCase() + name.slice(1)} *</label>{name === 'message' ? <textarea id={name} name={name} rows="5" value={formData[name]} onChange={handleChange} onBlur={handleBlur} className={errors[name] ? 'error' : ''} /> : <input type={name === 'email' ? 'email' : 'text'} id={name} name={name} value={formData[name]} onChange={handleChange} onBlur={handleBlur} className={errors[name] ? 'error' : ''} />}{errors[name] && <span className="error-message">{errors[name]}</span>}</div>)}<div className="form-group form-group-full"><button type="submit" className="btn btn-primary">Send Message</button></div></div>{isSubmitted && <p className="success-message">Thanks! Your message has been sent.</p>}</form></div></div></section>
}
export default Contact
