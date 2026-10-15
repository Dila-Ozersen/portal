import './Register.css'
import Navbar from './Navbar'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
    const [messageType, setMessageType] = useState<'success' | 'error'>('success')

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if (password != confirmPassword) {
            setMessage('Passwords do not match')
            setMessageType('error')
            return
        }

        setMessage('Form submitted. Registration unavailable at the moment.')
        setMessageType('success')
    }

  return (
    <>
      <Navbar />

      <main className="register-page">
        <section className="register-card">
        <header className="register-heading">
            <h1>Create your account</h1>
            <p>Get started with your Portal workspace.</p>
        </header>

        <form className="register-form" onSubmit={handleSubmit}>
            <div className="register-field">
            <label htmlFor="name">Display Name</label>
            <input
                id="name"
                type="text"
                placeholder="Display Name"
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
            />
            </div>

            <div className="register-field">
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
            />
            </div>

            <div className="register-field">
            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                placeholder="Create a password"
                autoComplete="new-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
            />
            </div>

            <div className="register-field">
            <label htmlFor="confirm-password">Confirm password</label>
            <input
                id="confirm-password"
                type="password"
                placeholder="Re-enter your password"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
            />
            </div>

            <button className="register-button" type="submit">
            Create account
            </button>
        </form>

        {message && (
            <p
                className={`register-message ${messageType}`}
                role="status"
            >
                {message}
            </p>
        )}

        <p className="register-footer">
            Already have an account?{' '}
            <Link to="/login">Sign in</Link>
        </p>
        </section>
      </main>
    </>
  )
}

export default Register
