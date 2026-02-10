import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

import Home from './components/Pages/Home'
import Perfil from './components/Pages/Perfil'
import Footer from './components/Footer'
import { store } from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil/:id" element={<Perfil />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
