import { PDFViewer } from '@embedpdf/react-pdf-viewer'
import resume from '../assets/resume.pdf'

export default function Resume() {
  return (
    <section className="panel resume-panel">
      <div style={{ height: '90vh' }}>
        <PDFViewer
          config={{
            src: resume,
            theme: { preference: 'dark' },
          }}
        />
      </div>
    </section>
  )
}