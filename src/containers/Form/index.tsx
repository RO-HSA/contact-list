import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { PatternFormat } from 'react-number-format';

import { ButtonsWrapper } from "../../components/Contact/styles"
import { CancelButton, SaveButton } from "../../styles"
import { BackButton, FormStyle, InputField } from "./styles"
import { add } from "../../store/reducers/contacts";
import { RootReducer } from "../../store";

const Form = () => {
  const navigate = useNavigate()
  const dispath = useDispatch()
  const contactAddedSuccessfully = useSelector((state: RootReducer) => state.contacts.addedSuccessfully)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')

  const addNewContact = (event: FormEvent) => {
    event.preventDefault()

    dispath(add({ name, email, tel }))
    if (contactAddedSuccessfully) {
      navigate('/')
    }
  }

  return (
    <>
      <BackButton type="button" onClick={() => navigate('/')}>Voltar</BackButton>
      <FormStyle onSubmit={addNewContact}>
        <InputField type="text" placeholder="Nome completo" value={name} onChange={(event) => setName(event.target.value)} />
        <InputField type="email" placeholder="email@exemplo.com" value={email} onChange={(event) => setEmail(event.target.value)} />
        <InputField as={PatternFormat} format="(##) #####-####" type="tel" placeholder="(00) 00000-0000" value={tel} onChange={(event) => setTel(event.target.value)} />
        <ButtonsWrapper>
          <SaveButton type="submit">Salvar</SaveButton>
          <CancelButton type="button" onClick={() => navigate('/')}>Cancelar</CancelButton>
        </ButtonsWrapper>
      </FormStyle>
    </>
  )
}

export default Form
