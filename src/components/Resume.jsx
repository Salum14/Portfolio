import { PDFViewer, ZoomMode } from '@embedpdf/react-pdf-viewer'
import resume from '../assets/resume.pdf'

export default function Resume() {
  return (
    <section className="panel resume-panel">
      <div className="resume-viewer">
        <PDFViewer
          config={{
            src: resume,
            theme: { preference: 'dark' },
            zoom: { defaultZoomLevel: ZoomMode.FitWidth},
          }}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </section>
  )
}