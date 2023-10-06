import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import GlobalStyles, { Container } from "./styles";
import store from "./store";
import Home from "./pages/Home";
import NewContact from "./pages/NewContact";

export type Contact = {
  id: number
  name: string
  email: string
  tel: string
}

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/new',
    element: <NewContact />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Container>
      <RouterProvider router={routes} />
      </Container>
    </Provider>
  );
}

export default App;
