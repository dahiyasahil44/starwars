import { Routes, Route } from 'react-router-dom'
import './App.css'
import Films from './pages/Films'
import CardDetail from './components/CardDetail'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Films />} />
        <Route path="/detail/:id" element={<CardDetail />} />
      </Routes>
    </>
  )
}

export default App
