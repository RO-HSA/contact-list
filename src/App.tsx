import ContactsList from "./containers/ContactsList";
import Search from "./components/Search";
import GlobalStyles, { Container } from "./styles";

function App() {
  return (
    <>
    <GlobalStyles />
    <Container>
      <Search />
      <ContactsList />
    </Container>
    </>
  );
}

export default App;
