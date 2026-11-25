import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Detail from './components/Detail.jsx'
export default function App() {
  return <Routes><Route path="/" element={<Home />} /><Route path="/topic/:id" element={<Detail />} /><Route path="*" element={<Home />} /></Routes>
}
