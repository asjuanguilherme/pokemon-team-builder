import * as S from './styles'
import { Container } from '../styles'

type Props = {
  linkTo: string
  title: string
}

const Header = (props: Props) => {
  return (
    <S.Header>
      <Container>
        <S.StyledLink to={props.linkTo}>{props.title}</S.StyledLink>
      </Container>
    </S.Header>
  )
}

export default Header
