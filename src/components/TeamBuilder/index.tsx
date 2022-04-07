import * as S from './styles'
import TeamOption from '../TeamOption'

type Props = {}

const selectedPokemons = [1, 2, 3]

const TeamBuilder = (props: Props) => {
  const teamSlots: (number | null)[] = [null, null, null, null, null, null]

  const renderTeamSlots = () => {
    selectedPokemons.forEach((pokemon, index) => (teamSlots[index] = pokemon))

    return teamSlots.map(slot => <TeamOption id={slot} />)
  }

  return (
    <S.Container>
      <S.Title>My Team</S.Title>
      <S.List>{renderTeamSlots()}</S.List>
    </S.Container>
  )
}

export default TeamBuilder
