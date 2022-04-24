import * as S from './styles'
import { useContext, useEffect, useState } from 'react'
import { monsterTypesColors } from '../../styles/monsterTypesColors'
import { PokemonsContext } from '../../contexts/PokemonsContext'
import { Pokemon } from '../../types/Pokemon'
import { pokeApi } from '../../services/pokeApi'

const PokemonOption = (props: Pokemon) => {
  const { charsSlots, setCharsSlots } = useContext(PokemonsContext)
  const selected = charsSlots.includes(props.id)

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
    const charSlotIndex = charsSlots.indexOf(props.id)

    if (emptySlot !== -1 && charSlotIndex === -1)
      addCharToSlot(props.id, emptySlot)
    else removeCharFromSlot(charSlotIndex)
  }

  return (
    <S.Container onClick={handleClick}>
      {selected && <S.SelectedIcon />}
      <S.Id monsterId={props.id}>#{props.id}</S.Id>
      <S.Img src={props.image} />
      <S.Name>{props.name}</S.Name>
      <S.Types>
        {props.types?.map((type, index) => (
          <S.TypeBar color={monsterTypesColors[type]} key={index} />
        ))}
      </S.Types>
    </S.Container>
  )
}

export default PokemonOption
