import { SlotsContainer, TeamNameContainer } from '../TeamBuilder/styles'
import TeamSlot from '../TeamSlot'
import * as S from './styles'

type Props = {
  name: string
  characters: number[]
}

const Team = ({ name, characters }: Props) => {
  return (
    <S.Container>
      <TeamNameContainer>
        <S.TeamName>{name}</S.TeamName>
      </TeamNameContainer>
      <SlotsContainer>
        {characters.map((id, index) => (
          <TeamSlot id={id} key={index} index={index} selectedIndex={null} />
        ))}
      </SlotsContainer>
    </S.Container>
  )
}

export default Team
