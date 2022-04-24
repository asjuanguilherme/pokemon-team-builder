import * as S from './styles'
import { useContext, useEffect, useState } from 'react'
import { monsterTypesColors } from '../../styles/monsterTypesColors'
import Background from './Background'
import { Pokemon } from '../../types/Pokemon'
import { PokemonsContext } from '../../contexts/PokemonsContext'
import { CharSlot } from '../../types/CharSlot'

type Props = {
  id: CharSlot
  onClick?: () => void
  selectedIndex: CharSlot
  index: number
}

const TeamSlot = (props: Props) => {
  const { charsSlots, items } = useContext(PokemonsContext)
  const [pokemonData, setPokemonData] = useState<Pokemon>()

  useEffect(() => {
    const selectedPokemon = items.filter(
      pokemon => pokemon.id === props.id
    )[0] as Pokemon

    setPokemonData({ ...selectedPokemon })
  }, [charsSlots, props.id, items])

  return (
    <div>
      <S.Container
        onClick={props.onClick}
        selectedIndex={props.selectedIndex}
        index={props.index}
      >
        {pokemonData?.image && <S.CharacterImg src={pokemonData?.image} />}
        <Background
          color={
            pokemonData?.types
              ? monsterTypesColors[pokemonData?.types[0]]
              : 'white'
          }
        />
      </S.Container>
    </div>
  )
}

export default TeamSlot
