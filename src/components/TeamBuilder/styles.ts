import styled from 'styled-components'

export const Container = styled.div`
  padding: 1rem 0;
`

export const Title = styled.h2`
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
  font-weight: 800;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem 0;
  list-style: none;

  & > div:nth-child(n + 4) {
    position: relative;
    right: -1.5rem;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;

  button {
    margin-left: 0.75rem;
  }
`
