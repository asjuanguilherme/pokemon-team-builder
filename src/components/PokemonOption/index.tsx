import * as S from './styles'
import { useContext, useEffect, useState } from 'react'
import { monsterTypesColors } from '../../styles/monsterTypesColors'
import { PokemonsContext } from '../../contexts/PokemonsContext'
import { Pokemon } from '../../types/pokemon'
import { api } from '../../services/api'

type Props = {
  charUrl: string
}

const PokemonOption = (props: Props) => {
  const { charsSlots, setCharsSlots } = useContext(PokemonsContext)
  const [pokemonData, setPokemonData] = useState({} as Pokemon)

  useEffect(() => {
    if (props.charUrl !== null)
      api
        .get(props.charUrl)
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
  }, [props.charUrl, charsSlots])

  const addCharToSlot = (charId: number, emptySlot: number) => {
    const newCharsSlots = [...charsSlots]
    newCharsSlots[emptySlot] = charId
    setCharsSlots(newCharsSlots)
  }

  const removeCharFromSlot = (charSlot: number) => {
    const newCharsSlots = [...charsSlots]
    newCharsSlots[charSlot] = null
    setCharsSlots(newCharsSlots)
  }

  const handleClick = () => {
    const emptySlot = charsSlots.indexOf(null)
    const charSlotIndex = charsSlots.indexOf(pokemonData.id)

    if (emptySlot !== -1 && charSlotIndex === -1)
      addCharToSlot(pokemonData.id, emptySlot)
    else removeCharFromSlot(charSlotIndex)
  }

  return (
    <S.Container onClick={handleClick}>
      <S.Id monsterId={pokemonData.id}>#{pokemonData.id}</S.Id>
      <S.Img src={pokemonData.image} />
      <S.Name>{pokemonData.name}</S.Name>
      <S.Types>
        {pokemonData.types?.map((type, index) => (
          <S.TypeBar color={monsterTypesColors[type]} key={index} />
        ))}
      </S.Types>
    </S.Container>
  )
}

export default PokemonOption
