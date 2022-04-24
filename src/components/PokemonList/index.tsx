import * as S from './styles'
import PokemonOption from '../PokemonOption'
import { useContext, useEffect, useRef } from 'react'
import { PokemonsContext } from '../../contexts/PokemonsContext'
import Loading from '../Loading'

const PokemonList = () => {
  const { items, loading, setCurrentPage } = useContext(PokemonsContext)
  const scrollEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries: any) => {
      if (entries.some((entry: any) => entry.isIntersecting))
        setCurrentPage((prevPage: number) => prevPage + 1)
    })
    intersectionObserver.observe(scrollEndRef.current as Element)
    return () => intersectionObserver.disconnect()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <S.Container>
      <S.Title>Choose 6 Pokémons:</S.Title>
      <S.ScrollContainer>
        <S.List>
          {items?.map((pokemon, index) => (
            <PokemonOption charUrl={pokemon.url} key={index} />
          ))}
        </S.List>
        <div
          ref={scrollEndRef}
          style={{ paddingTop: '0.3rem', width: '100%' }}
        ></div>
        {loading && (
          <Loading
            message="Discovering Pokémons..."
            size="1.5rem"
            style={{ paddingTop: '1.5rem', paddingBottom: '2.5rem' }}
          />
        )}
      </S.ScrollContainer>
    </S.Container>
  )
}

export default PokemonList
