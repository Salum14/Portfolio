const PROJECTS = [
  {
    year: '2026',
    name: 'Portfolio',
    images: ['/portfolio-about-page.png', '/portfolio-terminal-mode.png'],
    description:
      'My portfolio website with a macOS terminal feature to introduce myself and display my work',
    stack: ['React', 'Vite', 'CSS'],
    repo: '',
  },
  {
    year: '2025',
    name: '🎥 Movie-app',
    image: 'https://github.com/user-attachments/assets/1e80c9e5-6446-4e5f-9c3f-6a614958d95a',
    description:
      ' full-stack movie discovery application enabling users to browse, search, and save their favorite movies',
    stack: ['React', 'Node.js', 'Express', 'TMDB Rest APIs'],
    repo: 'https://github.com/Salum14/Movie-App',
  },

]

export default function Portfolio() {
  return (
    <section className="panel">
      {PROJECTS.map((project, i) => (
        <div className="entry" key={i}>
          <div className="date">{project.year}</div>
          <div>
            <h3>{project.name}</h3>

            {project.images && (
              <div className="project-gallery">
                {project.images.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`${project.name} screenshot ${idx + 1}`}
                    className="project-thumb"
                  />
                ))}
              </div>
            )}

            {!project.images && project.image && (
              <img
                src={project.image}
                alt={`Screenshot of ${project.name}`}
                className="project-thumb"
              />
            )}

            <p>{project.description}</p>
            <div className="stack">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <a className="repo" href={project.repo} target="_blank" rel="noopener noreferrer">
              🔗 Repo
            </a>
          </div>
        </div>
      ))}
    </section>
  )
}