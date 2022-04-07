import GlobalStyle from './styles/globalStyle'
import Layout from './components/Layout'
import PokemonList from './components/PokemonList'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <PokemonList />
      </Layout>
    </>
  )
}

export default App
