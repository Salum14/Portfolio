import { useState, useEffect } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import Nav from './components/Nav.jsx'
import Info from './components/Info.jsx'
import Skills from './components/Skills.jsx'
import Portfolio from './components/Portfolio.jsx'
import Terminal from './components/Terminal/Terminal.jsx'
import Resume from './components/Resume.jsx'
import './App.css'

const TABS = ['info', 'skills', 'portfolio','resume']

export default function App() {
  const initialTab = TABS.includes(window.location.hash.replace('', ''))
    ? window.location.hash.replace('#', '')
    : 'info'

  const [activeTab, setActiveTab] = useState(initialTab)
  const [terminalOpen, setTerminalOpen] = useState(false)
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'dark'
  )

  useEffect(() => {
    window.history.replaceState(null, '', '' + activeTab)
  }, [activeTab])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="app">
      <button
        className="theme-toggle-btn"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label="Toggle light and dark mode"
      >
        {theme === 'dark' ? '☀' : '☾'}
      </button>

      <div className="container identity">
        <h1>Salum Matope</h1>
        <div className="role">
          Software Engineer | Full-Stack Developer 
        </div>
      </div>

      <Nav activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="container">
        {activeTab === 'info' && <Info onOpenTerminal={() => setTerminalOpen(true)} />}
        {activeTab === 'skills' && <Skills />}
        {activeTab === 'portfolio' && <Portfolio />}
        {activeTab === 'contact' && <Contact />}
        {activeTab === 'resume' && <Resume />}

      </main>


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