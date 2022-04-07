import * as S from './styles'
import { monsterTypesColors } from '../../styles/monsterTypesColors'

type Props = {
  id: number
  name: string
  types: string[]
  image: string
}

const index = (props: Props) => {
  const renderTypes = () => {
    return props.types.map(a => <S.TypeBar color={monsterTypesColors[a]} />)
  }

  return (
    <S.Container>
      <S.Id monsterId={props.id}>#{props.id}</S.Id>
      <S.Img src={props.image} />
      <S.Name>{props.name}</S.Name>
      <S.Types>{renderTypes()}</S.Types>
    </S.Container>
  )
}

export default index
