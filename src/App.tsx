import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalCss } from './styles'
import Rotas from './routes'
import PerfilProdut from './components/pages/PerfilPag'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Routes>
        <Route path="/" element={<Rotas />} />
        <Route path="/Perfilprodut" element={<PerfilProdut />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
