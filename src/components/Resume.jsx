export default function Resume() {
  return (
    <section className="panel resume-panel">
      <iframe
        src="/resume.pdf"
        title="Resume preview"
        className="resume-frame"
      />
      <p className="resume-fallback"><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Open PDF</a>
      </p>
    </section>
  )
}