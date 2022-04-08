import * as S from './styles'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { monsterTypesColors } from '../../styles/monsterTypesColors'
import Background from './Background'
import { Pokemon } from '../../types/pokemon'

type Props = {
  id: number | null
}

const TeamOption = (props: Props) => {
  const [pokemonData, setPokemonData] = useState<Pokemon>()
  const type = pokemonData?.types[0]
  const image = pokemonData?.image

  useEffect(() => {
    api
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
  }, [])

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
