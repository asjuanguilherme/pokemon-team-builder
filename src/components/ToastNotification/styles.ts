import styled from 'styled-components'
import { light } from '../../styles/themes'

export const Container = styled.div`
  position: fixed;
  top: 1.3rem;
  right: 1.3rem;
  z-index: 100;
  width: calc(100% - 2.6rem);
  max-width: 500px;
  display: flex;
  background-color: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.15);
`

export const Icon = styled.div<{ type: string }>`
  width: 5rem;
  min-height: 5rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => light.colors[props.type]};

  svg {
    font-size: 2.5rem;
    color: white;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
`

export const Title = styled.h2`
  font-size: 0.875rem;
  margin-bottom: 0.3em;
  text-transform: capitalize;
`

export const Message = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  opacity: 0.75;
`
