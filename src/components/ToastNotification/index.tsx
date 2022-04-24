import * as S from './styles'
import { MdCheckCircle, MdError, MdWarning, MdInfo } from 'react-icons/md'

type Props = {
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message: string
}

const Icons = {
  success: <MdCheckCircle />,
  error: <MdError />,
  warning: <MdWarning />,
  info: <MdInfo />,
}

const ToastNotification = ({ type = 'info', title, message }: Props) => {
  return (
    <S.Container>
      <S.Icon type={type}>{Icons[type]}</S.Icon>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Message>{message}</S.Message>
      </S.Content>
    </S.Container>
  )
}

export default ToastNotification
