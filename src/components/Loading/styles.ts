import styled, { keyframes } from 'styled-components'

const LoadingAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    48% {
        transform: rotate(360deg) scale(1.3);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const Container = styled.div<{ size: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    animation: ${LoadingAnimation} ease-in-out 1s infinite;
    ${props => `width: ${props.size}; height: ${props.size}`}
  }
`

export const Message = styled.span`
  margin-bottom: 1rem;
`
