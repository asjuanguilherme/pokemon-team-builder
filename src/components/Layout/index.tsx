import * as S from './styles'
import Header from './Header'
import { useContext, useEffect } from 'react'
import { PokemonsContext } from '../../contexts/PokemonsContext'
import ToastNotification from '../ToastNotification'

type Props = {
  children: any
  linkTo: string
  title: string
}

const Layout = (props: Props) => {
  const { notification, setNotification } = useContext(PokemonsContext)

  useEffect(() => {
    if (!notification) return

    const closeToastNotification = setTimeout(() => {
      setNotification(undefined)
    }, 3000)

    return () => clearTimeout(closeToastNotification)
  }, [notification])

  return (
    <>
      <Header linkTo={props.linkTo} title={props.title} />
      {notification && (
        <ToastNotification
          type={notification.type}
          title={notification.title}
          message={notification.message}
        />
      )}
      <S.Main>
        <S.Container>{props.children}</S.Container>
      </S.Main>
    </>
  )
}

export default Layout
