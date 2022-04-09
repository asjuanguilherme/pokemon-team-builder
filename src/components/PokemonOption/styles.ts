import styled from 'styled-components'
import { light } from '../../styles/themes'
import { MdCheck } from 'react-icons/md'

export const Container = styled.div`
  padding-top: 0.8rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 65px;
  position: relative;
`
export const Id = styled.span<{ monsterId: number }>`
  height: 1.3rem;
  width: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  color: white;
  background-color: ${light.colors.primary};
  position: absolute;
  left: 0;
  top: 0;
  font-size: 0.6rem;
  font-weight: 800;
  line-height: 0.9em;

  ${props => (props.monsterId > 10 ? 'font-size: .5rem;' : '')}
  ${props => (props.monsterId > 99 ? 'font-size: .4rem;' : '')}
`
export const Img = styled.img`
  width: 100%;
  height: 3rem;
  object-fit: contain;
`
export const Name = styled.h3`
  margin: 0;
  font-size: 0.65rem;
  margin-top: 0.3rem;
  text-transform: capitalize;
`
export const Types = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 2px;
  margin-top: 0.4rem;
`

export const TypeBar = styled.span<{ color: string }>`
  display: block;
  width: 49%;
  height: 100%;
  background-color: ${props => props.color};
`

export const SelectedIcon = styled(MdCheck)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  height: 2.25rem;
  width: 2.25rem;
  fill: white;
  background-color: ${light.colors.success};
  border-radius: 100%;
  opacity: 0.8;
`
