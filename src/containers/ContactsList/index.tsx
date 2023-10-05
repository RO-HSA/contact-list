import Contact from "../../components/Contact"
import { HeaderWrapper, Header, Wrapper } from "./styles"

const ContactsList = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header>Nome completo</Header>
        <Header>E-mail</Header>
        <Header>Telefone</Header>
      </HeaderWrapper>
      <Contact />
    </Wrapper>
  )
}

export default ContactsList
