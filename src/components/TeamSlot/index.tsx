import * as S from './styles'
import { useContext, useEffect, useState } from 'react'
import { pokeApi } from '../../services/pokeApi'
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
  const { charsSlots } = useContext(PokemonsContext)
  const [pokemonData, setPokemonData] = useState<Pokemon>()

  useEffect(() => {
    if (props.id !== null)
      pokeApi
        .get(`/pokemon/${props.id}`)
        .then(response => response.data)
        .then((pokemon: any) =>
          setPokemonData({
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.other.dream_world.front_default,
            types: pokemon.types.map((typeObject: any) => typeObject.type.name),
          })
        )
    else {
      setPokemonData({} as Pokemon)
    }
  }, [props.id, charsSlots])

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
