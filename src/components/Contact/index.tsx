import { useState } from "react"
import { Button, ButtonsWrapper, ContactStyle, ContactWrapper, RemoveButton, SaveButton } from "./styles"


const Contact = () => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <ContactWrapper>
      <ContactStyle>Robert da Hora Santos</ContactStyle>
      <ContactStyle>robert@email.com</ContactStyle>
      <ContactStyle>&#40;00&#41; 00000-0000</ContactStyle>
      <ButtonsWrapper>
        {estaEditando ? (
          <>
            <SaveButton onClick={() => setEstaEditando(false)} type="button">Salvar</SaveButton>
            <RemoveButton onClick={() => setEstaEditando(false)} type="button">Cancelar</RemoveButton>
          </>
        ) : (
          <>
            <Button onClick={() => setEstaEditando(true)} type="button">Editar</Button>
            <RemoveButton type="button">Remover</RemoveButton>
          </>
        )}

      </ButtonsWrapper>
    </ContactWrapper>

  )
}

export default Contact
