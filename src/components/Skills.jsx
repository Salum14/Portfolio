const SKILL_CATEGORIES = [
  {
    title: 'LANGUAGES',
    items: [
      { name: 'Java', level: 'proficient' },
      { name: 'Python', level: 'daily' },
      { name: 'React', level: 'daily' },
    ],
  },
  {
    title: 'INFRASTRUCTURE',
    items: [
      { name: 'AWS', level: 'daily' },
      { name: 'GCP', level: 'daily' },
      { name: 'SQL', level: 'proficient' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'Node.js', level: 'proficient' },
      { name: 'SQLite', level: 'familiar' },
      { name: 'Express', level: 'familiar' },
    ],
  },
  {
    title: 'TOOLS',
    items: [
      { name: 'Git', level: 'daily' },
      { name: 'Github', level: 'daily' },
      { name: 'Vs code', level: 'daily' },
    ],
  },
]

export default function Skills() {
  return (
    <section className="panel">
      <div className="skill-grid">
        {SKILL_CATEGORIES.map((cat) => (
          <div className="skill-cat" key={cat.title}>
            <h4>{cat.title}</h4>
            <ul>
              {cat.items.map((item) => (
                <li key={item.name}>
                  {item.name} <span className="lvl">{item.level}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
