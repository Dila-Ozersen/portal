import './App.css'
import Navbar from './Navbar.tsx'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <main className="landing-page" id="top">
      
      <Navbar />
      
      <section className="hero">
        <p className="eyebrow">A better way to work together</p>

        <h1>
          Everything your team needs.
          <br />
          <span>All in one place.</span>
        </h1>

        <p className="hero-description">
          Bring your team's projects, conversations, and plans
          together in one organized workspace.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#features">
            Explore Portal
          </a>
          <a className="button button-secondary" href="#security">
            Learn about security
          </a>
        </div>
      </section>

      <section className="features" id="features">
        <div className="section-heading">
          <p className="eyebrow">Built for teamwork</p>
          <h2>Work better, together.</h2>
          <p>
            Everything you need to keep your team organized
            and moving forward.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <h3>Organized workspaces</h3>
            <p>
              Keep company and personal work in separate,
              manageable spaces.
            </p>
          </article>

          <article className="feature-card">
            <h3>Projects and tasks</h3>
            <p>
              Give teams a shared place to plan projects,
              assign work, and track progress.
            </p>
          </article>

          <article className="feature-card">
            <h3>Team communication</h3>
            <p>
              Bring conversations and collaboration closer
              to the work they support.
            </p>
          </article>
        </div>
      </section>

      <section className="security-section" id="security">
        <p className="eyebrow">Security matters</p>
        <h2>Your workspace. Your access.</h2>
        <p>
          Portal is being designed with account security,
          controlled workspace access, and two-factor
          authentication in mind.
        </p>
      </section>

      <footer className="footer">
        <a className="brand" href="#top">
          Portal<span>.</span>
        </a>
        <p>One place for your team's work.</p>
      </footer>

    </main>
  )
}

export default Landing
