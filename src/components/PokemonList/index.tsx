import * as S from './styles'
import PokemonOption from '../PokemonOption'
import { useContext, useEffect } from 'react'
import { PokemonsContext } from '../../contexts/PokemonsContext'
import Loading from '../Loading'

const PokemonList = () => {
  const { items, loading, setCurrentPage } = useContext(PokemonsContext)

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries: any) => {
      if (entries.some((entry: any) => entry.isIntersecting))
        setCurrentPage((prevPage: number) => prevPage + 1)
    })
    intersectionObserver.observe(
      document.getElementById('pokemon-list-sentinel') as Element
    )
    return () => intersectionObserver.disconnect()
  }, [])

  return (
    <S.Container>
      <S.Title>Choose 6 Pokémons:</S.Title>
      <S.ScrollContainer>
        <S.List>
          {items?.map(pokemon => (
            <PokemonOption charUrl={pokemon.url} key={pokemon.name} />
          ))}
        </S.List>
        {loading && (
          <Loading
            message="Discovering Pokémons..."
            size="1.5rem"
            style={{ paddingTop: '1.5rem', paddingBottom: '2.5rem' }}
          />
        )}
        <S.Sentinel id="pokemon-list-sentinel" />
      </S.ScrollContainer>
    </S.Container>
  )
}

export default PokemonList
