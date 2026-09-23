import { useState, useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Info from './components/Info.jsx'
import Skills from './components/Skills.jsx'
import Portfolio from './components/Portfolio.jsx'
import Contact from './components/Contact.jsx'
import Terminal from './components/Terminal/Terminal.jsx'
import './App.css'

const TABS = ['info', 'skills', 'portfolio', 'contact']

export default function App() {
  const initialTab = TABS.includes(window.location.hash.replace('#', ''))
    ? window.location.hash.replace('#', '')
    : 'info'

  const [activeTab, setActiveTab] = useState(initialTab)
  const [terminalOpen, setTerminalOpen] = useState(false)

  useEffect(() => {
    window.history.replaceState(null, '', '#' + activeTab)
  }, [activeTab])

  return (
    <div className="app">
      <div className="container identity">
        <button className="tag-btn" onClick={() => setTerminalOpen(true)}>
          ~/portfolio
        </button>
        <h1>Salum Matope</h1>
        <div className="role">
          Software Engineer · Full-Stack · Data Structures · Algorithms
        </div>
      </div>

      <Nav activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="container">
        {activeTab === 'info' && <Info />}
        {activeTab === 'skills' && <Skills />}
        {activeTab === 'portfolio' && <Portfolio />}
        {activeTab === 'contact' && <Contact />}
      </main>

      <footer className="fine">© 2026 Salum Matope</footer>

      <button
        className="terminal-toggle-btn"
        onClick={() => setTerminalOpen(true)}
        aria-label="Open terminal mode"
      >
        &gt;_
      </button>

      {terminalOpen && (
        <div className="terminal-overlay" onClick={() => setTerminalOpen(false)}>
          <div className="terminal-window" onClick={(e) => e.stopPropagation()}>
            <Terminal onExit={() => setTerminalOpen(false)} />
          </div>
        </div>
      )}
    </div>
  )
}