import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import { ButtonsWrapper,ContactWrapper, ContactStyle } from "./styles"
import { Button, CancelButton, RemoveButton, SaveButton } from "../../styles"
import { edit, remove } from "../../store/reducers/contacts"

type Props = {
  name: string
  email: string
  tel: string
}

const Contact = ({ name: originalName, email: originalEmail, tel: originalTel }: Props) => {
  const dispatch = useDispatch()

  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')

  useEffect(() => {
    if (originalName.length > 0) {
      setName(originalName)
    }

    if (originalEmail.length > 0) {
      setEmail(originalEmail)
    }

    if (originalTel.length > 0) {
      setTel(originalTel)
    }
  }, [originalName, originalEmail, originalTel])

  const cancelarEditar = () => {
    setIsEditing(false)
    setName(originalName)
    setEmail(originalEmail)
    setTel(originalTel)
  }

  return (
    <ContactWrapper>
      <ContactStyle type="text" value={name} required disabled={!isEditing} onChange={(event) => setName(event.target.value)} />
      <ContactStyle type="email" value={email} required disabled={!isEditing} onChange={(event) => setEmail(event.target.value)} />
      <ContactStyle type="tel" value={tel} required disabled={!isEditing} onChange={(event) => setTel(event.target.value)}/>
      <ButtonsWrapper>
        {isEditing ? (
          <>
            <SaveButton onClick={() => {
              dispatch(edit({ name, email, tel }))
              setIsEditing(false)
              }} type="button">
                Salvar
            </SaveButton>
            <CancelButton onClick={() => {cancelarEditar()}} type="button">Cancelar</CancelButton>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)} type="button">Editar</Button>
            <RemoveButton type="button" onClick={() => dispatch(remove({ name, email, tel }))}>Remover</RemoveButton>
          </>
        )}
      </ButtonsWrapper>
    </ContactWrapper>

  )
}

export default Contact
