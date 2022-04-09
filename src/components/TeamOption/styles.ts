import styled, { css } from 'styled-components'

const blurred = css`
  filter: grayscale(85%);
`

export const Container = styled.li<{
  selectedIndex: null | number
  index: number
}>`
  width: 4.25rem;
  height: 4.25rem;
  position: relative;
  ${props =>
    typeof props.selectedIndex === 'number' &&
    props.selectedIndex !== props.index
      ? blurred
      : ''}
`
export const CharacterImg = styled.img`
  width: 100%;
  height: 100%;
  transform: scale(1.2);
`
