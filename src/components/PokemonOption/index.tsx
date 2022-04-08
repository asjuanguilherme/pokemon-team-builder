import * as S from './styles'
import { monsterTypesColors } from '../../styles/monsterTypesColors'
import { Pokemon } from '../../types/pokemon'

const index = (props: Pokemon) => {
  const renderTypes = () => {
    return props.types.map((type, index) => (
      <S.TypeBar color={monsterTypesColors[type]} key={index} />
    ))
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
