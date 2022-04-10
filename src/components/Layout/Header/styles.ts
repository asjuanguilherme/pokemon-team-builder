import styled from 'styled-components'
import { light } from '../../../styles/themes'
import { Link } from 'react-router-dom'

export const Header = styled.header`
  padding-top: 4rem;
  display: flex;
  background: ${light.colors.primary};
`

export const StyledLink = styled(Link)`
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 800;
  padding: 0.75rem 0;
  border-top: 1px solid white;
  color: white;
  text-align: center;
  display: block;
  text-decoration: 0;
`
