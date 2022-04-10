import styled from 'styled-components'
import { light } from '../../styles/themes'

export const Container = styled.li`
  list-style: none;
  padding: 1.5rem 0;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${light.colors.text};
  }
`
export const TeamName = styled.h2`
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
  font-weight: 800;
`
