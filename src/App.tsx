import { Routes, Route } from 'react-router-dom'
import HomePg from './Home'
import AIHome from './Ai'
import BlogPage from './Blog'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePg />} />
      <Route path="/ai" element={<AIHome />} />
      <Route path="/blogs/:slug" element={<BlogPage />} />
    </Routes>
  )
}
