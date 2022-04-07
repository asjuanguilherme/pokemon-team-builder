import * as S from './styles'
import { pokemonListMockup } from '../../data/mockup'
import { monsterTypesColors } from '../../styles/monsterTypesColors'
import Background from './Background'

type Props = {
  id: number | null
}

const TeamOption = (props: Props) => {
  const pokemon = pokemonListMockup.find(pokemon => pokemon.id === props.id)
  const type = pokemon ? pokemon.types[0] : null
  const image = pokemon ? pokemon.image : null

  return (
    <div>
      <S.Container>
        {image && <S.CharacterImg src={image} />}
        <Background color={type ? monsterTypesColors[type] : 'white'} />
      </S.Container>
    </div>
  )
}

export default TeamOption
