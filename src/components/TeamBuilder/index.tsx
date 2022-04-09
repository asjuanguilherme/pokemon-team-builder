import { SyntheticEvent, useContext, useState } from 'react'
import { PokemonsContext } from '../../contexts/PokemonsContext'
import * as S from './styles'
import TeamOption from '../TeamOption'
import Button from '../IconButton'
import { MdCheck, MdDelete, MdEdit } from 'react-icons/md'

type SlotIndex = number | null

const TeamBuilder = () => {
  const { charsSlots, setCharsSlots, teamName, setTeamName } =
    useContext(PokemonsContext)
  const [selectedSlot, setSelectedSlot] = useState<SlotIndex>(null)

  const selectSlot = (index: number) => {
    if (charsSlots[index] !== null) setSelectedSlot(index)
  }

  const removeFocusedCharFromSlot = () => {
    if (selectedSlot === null) return

    const newCharsSlots = [...charsSlots]
    newCharsSlots[selectedSlot] = null
    setCharsSlots(newCharsSlots)
    setSelectedSlot(null)
  }

  const setAllSlotsNull = () => {
    const emptySlots = [...charsSlots].map(() => null)
    setCharsSlots(emptySlots)
  }

  const createTeam = () => {
    setAllSlotsNull()
    console.log(
      `Novo time criado com sucesso: \n
      {
        id: 1578,
        name: ${teamName},
        chars: ${charsSlots}
      }
      `
    )
  }

  const handleChange = (e: any) => {
    const value = e.target.value
    if (value.length < 24) setTeamName(value)
  }

  const handleBlur = () => {
    if (teamName === '') setTeamName('MyTeam')
  }

  return (
    <S.Container>
      <S.TeamNameContainer>
        <S.TeamName
          value={teamName}
          onChange={handleChange}
          onBlur={handleBlur}
          size={teamName.length === 0 ? 1 : teamName.length}
        />
        <S.EditIcon />
      </S.TeamNameContainer>

      <S.List>
        {charsSlots.map((id, index) => (
          <TeamOption
            id={id}
            key={index}
            onClick={() => selectSlot(index)}
            selectedIndex={selectedSlot}
            index={index}
          />
        ))}
      </S.List>
      <S.ButtonsContainer>
        <Button
          onClick={() => removeFocusedCharFromSlot()}
          icon={<MdDelete />}
          colorVariant="danger"
          disabled={selectedSlot === null}
        />
        <Button
          onClick={() => createTeam()}
          icon={<MdCheck />}
          colorVariant="success"
          disabled={charsSlots.includes(null)}
        />
      </S.ButtonsContainer>
    </S.Container>
  )
}

export default TeamBuilder
