import { useSelector } from "react-redux"
import Contact from "../../components/Contact"
import { HeaderWrapper, Header, Wrapper } from "./styles"
import { RootReducer } from "../../store"

const ContactsList = () => {
  const { items } = useSelector((state: RootReducer) => state.contacts)
  const { term } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filterContacts = () => {
    let filteredContacts = items

    if (term !== undefined) {
      filteredContacts = filteredContacts.filter(
        (item) => item.name.toLowerCase().search(term.toLowerCase()) >= 0
      )
      return filteredContacts
    } else {
      return items
    }
  }

  const contacts = filterContacts()

  return (
    <Wrapper>
      <HeaderWrapper>
        <Header>Nome completo</Header>
        <Header>E-mail</Header>
        <Header>Telefone</Header>
      </HeaderWrapper>
      {contacts.map((item) => (
      <Contact key={item.tel} name={item.name} email={item.email} tel={item.tel} />
      ))}
    </Wrapper>
  )
}

export default ContactsList
