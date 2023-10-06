import { useSelector } from "react-redux"
import Contact from "../../components/Contact"
import { HeaderWrapper, Header, Wrapper } from "./styles"
import { RootReducer } from "../../store"

const ContactsList = () => {
  const { items } = useSelector((state: RootReducer) => state.contacts)

  return (
    <Wrapper>
      <HeaderWrapper>
        <Header>Nome completo</Header>
        <Header>E-mail</Header>
        <Header>Telefone</Header>
      </HeaderWrapper>
      {items.map((item) => (
      <Contact key={item.tel} name={item.name} email={item.email} tel={item.tel} />
      ))}
    </Wrapper>
  )
}

export default ContactsList
