import { useContext } from 'react'
import { PokemonsContext } from '../../contexts/PokemonsContext'
import * as S from './styles'
import TeamOption from '../TeamOption'

type Props = {}

const TeamBuilder = (props: Props) => {
  const { charsSelected, setCharsSelected, numberOfSlots } =
    useContext(PokemonsContext)

  const renderTeamSlots = () => {
    const teamSlots = []

    for (let i = 0; i < numberOfSlots; i++) {
      teamSlots.push(<TeamOption id={charsSelected[i]} key={i} />)
    }

    return teamSlots
  }

  return (
    <S.Container>
      <S.Title>My Team</S.Title>
      <S.List>{renderTeamSlots()}</S.List>
    </S.Container>
  )
}

export default TeamBuilder
