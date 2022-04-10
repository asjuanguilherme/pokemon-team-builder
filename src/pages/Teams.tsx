import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Team from '../components/Team'
import { fetchTeams } from '../services/teamsApi'

const Home = () => {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    fetchTeams()
      .then(res => setTeams(res.data))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    console.log(teams)
  }, [teams])

  return (
    <Layout linkTo="/" title="Create New Team">
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
