import { useContext, useState } from 'react'
import { PokemonsContext } from '../../contexts/PokemonsContext'
import * as S from './styles'
import TeamSlot from '../TeamSlot'
import Button from '../IconButton'
import { MdCheck, MdDelete } from 'react-icons/md'
import { PokemonTeamData } from '../../types/PokemonTeam'
import { sendNewTeam } from '../../services/teamsApi'
import { CharSlot } from '../../types/CharSlot'

const TeamBuilder = () => {
  const { charsSlots, setCharsSlots, teamName, setTeamName, setNotification } =
    useContext(PokemonsContext)
  const [selectedSlot, setSelectedSlot] = useState<CharSlot>(null)

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
    if (charsSlots.includes(null)) return false
    const pokemonTeamData = new FormData()
    pokemonTeamData.append('name', teamName)
    pokemonTeamData.append('characters', JSON.stringify(charsSlots))

    const newTeam: PokemonTeamData = {
      name: teamName,
      characters: JSON.stringify(charsSlots),
    }

    sendNewTeam(newTeam)
      .then(res => console.log(res))
      .then(
        () => {
          setAllSlotsNull()
          setTeamName('My Team')
          setNotification({
            title: 'Team created',
            message:
              'Your new team has been created successfully! You can find it in the teams tab.',
            type: 'success',
          })
        },
        setNotification({
          title: 'Team not created',
          type: 'error',
          message:
            'There was an error while creating the time. Please try again later.',
        })
      )
      .catch(err => console.error(err))
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

      <S.SlotsContainer>
        {charsSlots.map((id, index) => (
          <TeamSlot
            id={id}
            key={index}
            onClick={() => selectSlot(index)}
            selectedIndex={selectedSlot}
            index={index}
          />
        ))}
      </S.SlotsContainer>
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
