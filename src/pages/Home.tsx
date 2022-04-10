import Layout from '../components/Layout'
import Loading from '../components/Loading'
import PokemonList from '../components/PokemonList'
import TeamBuilder from '../components/TeamBuilder'

const Home = () => {
  return (
    <Layout linkTo="/teams" title="Teams">
      <Loading size="3rem" />
      <TeamBuilder />
      <PokemonList />
    </Layout>
  )
}

export default Home
