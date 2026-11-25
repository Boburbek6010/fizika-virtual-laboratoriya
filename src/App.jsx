import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Detail from './components/Detail.jsx'
import Shell from './components/Shell.jsx'
import { Nazariya, Testlar, Natijalar } from './components/Pages.jsx'
import { getTheme, applyTheme } from './store.js'
export default function App() {
  useEffect(() => { applyTheme(getTheme()) }, [])
  return <><Shell /><Routes><Route path="/" element={<Home />} /><Route path="/topic/:id" element={<Detail />} /><Route path="/nazariya" element={<Nazariya />} /><Route path="/testlar" element={<Testlar />} /><Route path="/natijalar" element={<Natijalar />} /><Route path="*" element={<Home />} /></Routes></>
}
