import GlobalStyle from './styles/globalStyle'
import Layout from './components/Layout'
import PokemonList from './components/PokemonList'
import TeamBuilder from './components/TeamBuilder'
import PokemonsProvider from './contexts/PokemonsContext'

const App = () => {
  return (
    <PokemonsProvider>
      <GlobalStyle />
      <Layout>
        <TeamBuilder />
        <PokemonList />
      </Layout>
    </PokemonsProvider>
  )
}

export default App
