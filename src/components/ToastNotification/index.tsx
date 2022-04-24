import * as S from './styles'
import { MdCheckCircle, MdError, MdWarning, MdInfo } from 'react-icons/md'
import { ToastNotificationData } from '../../types/ToastNotification'

const Icons = {
  success: <MdCheckCircle />,
  error: <MdError />,
  warning: <MdWarning />,
  info: <MdInfo />,
}

const ToastNotification = (props: ToastNotificationData) => {
  return (
    <S.Container>
      <S.Icon type={props.type === 'error' ? 'danger' : props.type}>
        {Icons[props.type]}
      </S.Icon>
      <S.Content>
        <S.Title>{props.title}</S.Title>
        <S.Message>{props.message}</S.Message>
      </S.Content>
    </S.Container>
  )
}

export default ToastNotification
