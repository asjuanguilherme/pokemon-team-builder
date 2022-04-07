import GlobalStyle from './styles/globalStyle'
import Layout from './components/Layout'
import PokemonList from './components/PokemonList'
import TeamBuilder from './components/TeamBuilder'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <TeamBuilder />
        <PokemonList />
      </Layout>
    </>
  )
}

export default App
