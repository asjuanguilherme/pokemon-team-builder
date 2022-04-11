import Layout from '../components/Layout'
import PokemonList from '../components/PokemonList'
import TeamBuilder from '../components/TeamBuilder'

const Home = () => {
  return (
    <Layout linkTo="/teams" title="Teams">
      <TeamBuilder />
      <PokemonList />
    </Layout>
  )
}

export default Home
