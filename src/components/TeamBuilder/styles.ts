import styled from 'styled-components'
import { MdEdit } from 'react-icons/md'

export const Container = styled.div`
  padding: 1.5rem 0;
`

export const SlotsContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem 0;
  list-style: none;

  & > div:nth-child(n + 4) {
    position: relative;
    right: -1.5rem;
  }
`

export const TeamName = styled.input`
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
  font-weight: 800;
  background-color: transparent;
`

export const TeamNameContainer = styled.div`
  display: flex;
`

export const EditIcon = styled(MdEdit)``

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;

  button {
    margin-left: 0.75rem;
  }
`
