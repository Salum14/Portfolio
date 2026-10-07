import portfolioDemo from '../assets/portfolioDemo.mp4'
import movieDemo from '../assets/github_profile_demo_optimized.mp4'

const PROJECTS = [
  {
    year: '2026',
    name: 'Portfolio',
    videos: [portfolioDemo],
    description:
      'My personal website with a macOS terminal feature to for users to interact with and to display my work',
    stack: ['React', 'Vite', 'CSS'],
    repo: 'https://github.com/Salum14/Portfolio',
  },
  {
    year: '2025',
    name: '🎥 Movie-app',
    videos: [movieDemo],
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

            {project.videos && project.videos.map((src, idx) => (
              <video
                key= {idx}
                src= {src}
                className="project-thumb"
                autoPlay
                loop
                muted
                playsInline
                />
            ))}

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