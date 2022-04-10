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
  animation: ${LoadingAnimation} ease-in-out 1s infinite;
  ${props => `width: ${props.size}; height: ${props.size}`}
`
