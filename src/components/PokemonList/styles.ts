import styled from 'styled-components'

export const Container = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
`
export const Title = styled.h2`
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
  font-weight: 800;
`

export const ScrollContainer = styled.div`
  overflow: auto;
  flex: 1;
  max-height: 43vh;
`

export const List = styled.ul`
  list-style: none;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0.6rem;
`
