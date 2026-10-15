import './Login.css'
import Navbar from './Navbar.tsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if (!email) {
            setMessage('Please enter an email')
            return
        } else if (!password) {
            setMessage('Please enter a password')
            return
        }

        setMessage('Form submitted. Authentication unavailable at the moment.')
    }

  return (
    <>
        <Navbar />
        <main className="login-page">
            <section className="login-card">
                <header className="login-heading">
                <p className="login-brand">
                    Portal<span>.</span>
                </p>

                <h1>Welcome back</h1>
                <p>Sign in to continue to your workspace.</p>
                </header>

                <form className="login-form" onSubmit={handleSubmit}>
                <div className="login-field">
                    <label htmlFor="email">Email</label>
                    <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    />
                </div>

                <div className="login-field">
                    <label htmlFor="password">Password</label>
                    <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                    />
                </div>

                <button className="login-button" type="submit">
                    Sign in
                </button>
                </form>
                {message && <p role="status">{message}</p>}

                <p className="login-footer">
                New to Portal? <Link to="/register">Create an account</Link>
                </p>
            </section>
        </main>
    </>
  )
}

export default Login
