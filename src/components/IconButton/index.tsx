import { ReactNode } from 'react'
import * as S from './styles'

type Props = {
  icon?: ReactNode
  onClick: () => void
  colorVariant: string
  disabled?: boolean
}

const Button = (props: Props) => {
  return (
    <S.Button
      onClick={props.onClick}
      variant={props.colorVariant}
      disabled={props.disabled || false}
    >
      {props.icon}
    </S.Button>
  )
}

export default Button
