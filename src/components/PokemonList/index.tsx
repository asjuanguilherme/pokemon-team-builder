import * as S from './styles'
import PokemonOption from '../PokemonOption'
import { pokemonListMockup } from '../../data/mockup'

type Props = {}

const PokemonList = (props: Props) => {
  const renderPokemonOptions = () => {
    return pokemonListMockup.map(pokemon => <PokemonOption {...pokemon} />)
  }

  return (
    <S.Container>
      <S.Title>Choose 6 Pokémons:</S.Title>
      <S.ScrollContainer>
        <S.List>{renderPokemonOptions()}</S.List>
      </S.ScrollContainer>
    </S.Container>
  )
}

export default PokemonList
