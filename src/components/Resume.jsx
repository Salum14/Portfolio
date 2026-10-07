import resume from '../assets/resume.pdf'

export default function Resume() {
  return (
    <section className="panel resume-panel">
      <iframe
        src={resume}
        title="Resume preview"
        className="resume-frame"
      />
      <p className="resume-fallback"><a href={resume} target="_blank" rel="noopener noreferrer">Open PDF</a>
      </p>
    </section>
  )
}