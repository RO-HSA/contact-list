import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --primaryColor: #2c3e50;
    --secondaryColor: #95a5a6;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
`

export default GlobalStyles
