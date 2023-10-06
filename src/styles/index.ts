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

export const Button = styled.button`
  display: flex;
  justify-content: center;
  padding: 4px;
  width: 64px;
  background-color: var(--primaryColor);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`

export const RemoveButton =  styled(Button)`
  background-color: #e74c3c;
`
export const CancelButton = styled(Button)`
  background-color: #f39c12;
`

export const SaveButton = styled(Button)`
  background-color: #27ae60;
`

export default GlobalStyles
