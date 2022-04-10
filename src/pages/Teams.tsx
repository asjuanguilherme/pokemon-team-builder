import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Loading from '../components/Loading'
import Team from '../components/Team'
import { fetchTeams } from '../services/teamsApi'

const Home = () => {
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchTeams()
      .then(res => setTeams(res.data))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    console.log(teams)
  }, [teams])

  return (
    <Layout linkTo="/" title="Create New Team">
      {loading && (
        <Loading
          size="3rem"
          message="Loading teams..."
          style={{ paddingTop: '2rem' }}
        />
      )}
      {teams?.map((team: any, index) => (
        <Team
          name={team.name}
          characters={JSON.parse(team.characters)}
          key={index}
        />
      ))}
    </Layout>
  )
}

export default Home
