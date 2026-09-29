const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    items: [
      { name: 'Java' },
      { name: 'Python'},
      { name: 'React'},
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { name: 'FastAPI'},
      { name: 'Spring Boot'},
      { name: 'Flask'},
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'MongoDB'},
      { name: 'SQLite'},
      { name: 'MySQL'},
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git'},
      { name: 'Github'},
      { name: 'Vs code'},
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
