import styled from "styled-components";

export const ContactStyle = styled.li`
  color: var(--secondaryColor);
`
export const ContactWrapper = styled.ul`
  display: grid;
  padding: 6px 0;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 8px;
  border-spacing: 16px;
  align-items: center;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 6px;
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

export const SaveButton = styled(Button)`
  background-color: #27ae60;
`
