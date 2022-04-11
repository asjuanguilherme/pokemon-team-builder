import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Loading from '../components/Loading'
import Team from '../components/Team'
import { fetchTeams } from '../services/teamsApi'

type PokemonTeam = {
  id: number
  name: string
  characters: number[]
}

const Home = () => {
  const [teams, setTeams] = useState<PokemonTeam[]>([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setLoading(true)
    fetchTeams(currentPage)
      .then(res => res.data)
      .then(newTeams =>
        setTeams(prevTeams => [...(prevTeams as PokemonTeam[]), ...newTeams])
      )
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [currentPage])

  useEffect(() => {
    const intersectionObserverTeams = new IntersectionObserver(
      (entries: any) => {
        if (entries.some((entry: any) => entry.isIntersecting))
          setCurrentPage((prevPage: number) => prevPage + 1)
      }
    )

    const TeamListSentinel = document.getElementById('team-list-sentinel')

    intersectionObserverTeams.observe(TeamListSentinel as Element)

    return () => intersectionObserverTeams.disconnect()
  }, [])

  return (
    <Layout linkTo="/" title="Create New Team">
      {teams?.map((team: any, index) => (
        <Team
          name={team.name}
          characters={JSON.parse(team.characters)}
          key={index}
        />
      ))}
      <span
        style={{ paddingTop: '.5rem', display: 'block' }}
        id="team-list-sentinel"
      ></span>
      {loading && (
        <Loading
          size="3rem"
          message="Loading teams..."
          style={{ padding: '2rem 0' }}
        />
      )}
    </Layout>
  )
}

export default Home
