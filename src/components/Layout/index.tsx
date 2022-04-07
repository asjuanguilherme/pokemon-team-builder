import * as S from './styles'
import Header from './Header'

type Props = {
  children: any
}

const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <S.Main>
        <S.Container>{props.children}</S.Container>
      </S.Main>
    </>
  )
}

export default Layout
