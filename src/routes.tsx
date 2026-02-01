import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Homepag'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
)

export default Rotas
