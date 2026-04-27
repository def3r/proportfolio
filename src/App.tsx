import { Routes, Route } from 'react-router-dom'
import HomePg from './Home'
import AIHome from './Ai'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePg />} />
      <Route path="/ai" element={<AIHome />} />
    </Routes>
  )
}
