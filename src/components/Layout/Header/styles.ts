import styled from 'styled-components'
import { light } from '../../../styles/themes'

export const Header = styled.header`
  padding-top: 4rem;
  display: flex;
  background: ${light.colors.primary};
`

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 800;
  padding: 0.75rem 0;
  border-top: 1px solid white;
  color: white;
  text-align: center;
`
