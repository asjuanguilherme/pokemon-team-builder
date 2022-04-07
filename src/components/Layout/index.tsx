import * as S from "./styles"
import Header from "./Header"

type IProps = {
  children: any
}

const Layout = (props: IProps) => {
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
