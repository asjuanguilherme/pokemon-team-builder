import GlobalStyle from './styles/globalStyle'
import PokemonsProvider from './contexts/PokemonsContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Teams from './pages/Teams'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <PokemonsProvider>
        <Router>
          <Routes>
            <Route path="/teams" element={<Teams />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </Router>
      </PokemonsProvider>
    </>
  )
}

export default App
