import { FaLinkedin, FaGithub, FaDownload, FaEnvelope } from 'react-icons/fa'
import resumePdf from '../assets/resume.pdf'

export default function Info({ onOpenTerminal }) {
  return (
    <section className="panel">
      <p className="lede">
        Hey, I'm Salum and I like building things. I'm a recent grad software engineer with an interest in full-stack web development. The part I enjoy most is working under the hood like designing APIs, structuring databases, and making software reliable as it scales.
      </p>
      <p className="lede">
       
      </p>

      <div className="fact-row">
        <div className="fact">
          <h4>BASED IN</h4>
          <p>Silver Spring,MD</p>
        </div>
        <div className="fact">
          <h4>CURRENTLY</h4>
          <p>Open to Opportunities</p>
        </div>
        <div className="fact">
          <h4>FOCUS</h4>
          <p> Web Development</p>
        </div>
      </div>
      <div className="links">
      <div className="icon-group">
        <a href="https://github.com/Salum14"target="_blank" rel="noopener noreferrer">
          <FaGithub size={18} />
        </a>
        <a href="https://www.linkedin.com/in/salum-matope-33129628a/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={18} />
        </a>
        <a href={resumePdf} download="Salum-Matope-Resume.pdf" aria-label="Download CV">
          <FaDownload size={16} />
        </a>
        <a href="mailto:salum.matope14@gmail.com" aria-label="Email">
          <FaEnvelope size={18} />
        </a>
        </div>

        <button className="terminal-link" onClick={onOpenTerminal} aria-label="Open terminal mode">
          <span className="typewriter">~/portfolio</span><span className="cursor-block"></span>
        </button>
      </div>
    </section>
  )
}
