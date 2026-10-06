import { FaLinkedin, FaGithub, FaDownload, FaEnvelope } from 'react-icons/fa'

export default function Info({ onOpenTerminal }) {
  return (
    <section className="panel">
      <p className="lede">
        Hello, My name is Salum Matope and I like building things. Im an aspiring software engineer, interested in full-stack web development, with a passion on backend systems - API design, database structure/alogrithms, and keeping systems reliable as they scale.
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
          <p>Avalible for Employment</p>
        </div>
        <div className="fact">
          <h4>FOCUS</h4>
          <p> Web Applications</p>
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
        <a href="/resume.pdf" download aria-label="Download CV">
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
