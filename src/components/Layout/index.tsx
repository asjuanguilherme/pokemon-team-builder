import * as S from './styles'
import Header from './Header'

type Props = {
  children: any
  linkTo: string
  title: string
}

const Layout = (props: Props) => {
  return (
    <>
      <Header linkTo={props.linkTo} title={props.title} />
      <S.Main>
        <S.Container>{props.children}</S.Container>
      </S.Main>
    </>
  )
}

export default Layout
