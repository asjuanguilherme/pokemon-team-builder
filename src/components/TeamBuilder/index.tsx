import { useContext } from 'react'
import { PokemonsContext } from '../../contexts/PokemonsContext'
import * as S from './styles'
import TeamOption from '../TeamOption'

type Props = {}

const TeamBuilder = (props: Props) => {
  const { charsSlots } = useContext(PokemonsContext)

  return (
    <S.Container>
      <S.Title>My Team</S.Title>
      <S.List>
        {[...charsSlots].map((id, index) => (
          <TeamOption id={id} key={index} />
        ))}
      </S.List>
    </S.Container>
  )
}

export default TeamBuilder
