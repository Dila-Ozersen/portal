import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './Landing.tsx'
import Login from './Login.tsx'
import Register from './Register.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
