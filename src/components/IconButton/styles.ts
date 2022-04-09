import styled, { css } from 'styled-components'
import { light } from '../../styles/themes'
import { darken } from 'polished'

const getColorVariant = (variant: string, disabled?: boolean) => {
  const color = light.colors[variant]

  return css`
    background-color: ${color};
    color: white;
    &:hover {
      background-color: ${disabled ? color : darken(0.1, color)};
    }
  `
}

const disabledStyle = css`
  opacity: 0.5;
`

export const Button = styled.button<{ variant: string; disabled: boolean }>`
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.65rem;
  border-radius: 100%;

  ${props => getColorVariant(props.variant, props.disabled)}
  ${props => (props.disabled ? disabledStyle : '')}
`
