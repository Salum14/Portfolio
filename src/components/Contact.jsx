const CONTACT_ROWS = [
  { label: 'EMAIL', value: 'salum.matope14@gmail.com', href: 'mailto:salum.matope14@gmail.com' },
  { label: 'GITHUB', value: '🔗', href: 'https://github.com/Salum14'},
  { label: 'LINKEDIN', value: '🔗', href: 'https://www.linkedin.com/in/salum-matope-33129628a/' },
]

export default function Contact() {
  return (
    <section className="panel">
      <div className="contact-lede">Let's build something!</div>
      <div className="contact-list">
        {CONTACT_ROWS.map((row) => (
          <div className="contact-row" key={row.label}>
            <span className="label">{row.label}</span>
            {row.href ? (
              
              <a href={row.href}
                target={row.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={row.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              >
                {row.value}
              </a>
            ) : (
              <span>{row.value}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}